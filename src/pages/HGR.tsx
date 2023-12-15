import { FilesetResolver, GestureRecognizer } from "@mediapipe/tasks-vision"
import { useCallback, useEffect, useRef, useState } from "react"
import Webcam from "react-webcam"
import {
	drawConnectors,
	drawLandmarks,
	// HAND_CONNECTIONS,
} from "@mediapipe/drawing_utils"
import { HAND_CONNECTIONS } from "@mediapipe/hands"

import * as React from "react"
import { Box } from "@mui/material"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
// import model from './model/gesture_recognizer (1).task'
// import model from './model/'
import "./Hgr.css"

let startTime = "" as any

function HGR() {
	const webcamRef = useRef(null) as any
	const canvasRef = useRef(null) as any
	const [webcamRunning, setWebcamRunning] = useState(false)
	const [runningMode, setRunningMode] = useState<"IMAGE" | "VIDEO">("IMAGE")
	const [detectedData, setDetectedData] = useState([]) as any
	const [gestureRecognizer, setGestureRecognizer] = useState<any>()
	const [gestureOutput, setGestureOutput] = useState("") as any
	const [progress, setProgress] = useState(0) as any
	const requestRef = useRef() as any
	const [currentImage, setCurrentImage] = useState(null) as any

	console.log({ gestureRecognizer })
	const time = Date.now()
	let result: any

	const predictWebcam = useCallback(() => {
		if (runningMode === "IMAGE") {
			setRunningMode("VIDEO")
			gestureRecognizer.setOptions({ runningMode: "VIDEO" })
		}

		let nowInMs = Date.now()
		const results = gestureRecognizer.recognizeForVideo(
			webcamRef.current.video,
			nowInMs
		)

		console.log({ results })

		const canvasCtx = canvasRef.current.getContext("2d")
		canvasCtx.save()
		canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

		const videoWidth = webcamRef.current.video.videoWidth
		const videoHeight = webcamRef.current.video.videoHeight

		// Set video width
		webcamRef.current.video.width = videoWidth
		webcamRef.current.video.height = videoHeight

		// Set canvas height and width
		canvasRef.current.width = videoWidth
		canvasRef.current.height = videoHeight

		// Draw the results on the canvas, if any.
		if (results.landmarks) {
			for (const landmarks of results.landmarks) {
				drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
					color: "#00FF00",
					lineWidth: 5,
				})

				drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 })
			}
		}
		if (results.gestures.length > 0) {
			setDetectedData((prevData: any) => [
				...prevData,
				{
					SignDetected: results.gestures[0][0].categoryName,
				},
			])

			setGestureOutput(results.gestures[0][0].categoryName)
			setProgress(Math.round(parseFloat(results.gestures[0][0].score) * 100))
		} else {
			setGestureOutput("")
			setProgress("")
		}

		if (webcamRunning === true) {
			requestRef.current = requestAnimationFrame(predictWebcam)
		}
	}, [webcamRunning, runningMode, gestureRecognizer, setGestureOutput])
	const animate = useCallback(() => {
		requestRef.current = requestAnimationFrame(animate)
		predictWebcam()
	}, [predictWebcam])

	const enableCam = useCallback(() => {
		if (!gestureRecognizer) {
			alert("Please wait for gestureRecognizer to load")
			return
		}

		if (webcamRunning === true) {
			setWebcamRunning(false)
			cancelAnimationFrame(requestRef.current)
			setCurrentImage(null)

			const endTime = new Date()

			const timeElapsed = (
				(endTime.getTime() - startTime.getTime()) /
				1000
			).toFixed(2)

			// Remove empty values
			const nonEmptyData = detectedData.filter(
				(data: any) => data.SignDetected !== "" && data.DetectedScore !== ""
			)

			//to filter continous same signs in an array
			const resultArray = []
			let current = nonEmptyData[0]

			for (let i = 1; i < nonEmptyData.length; i++) {
				if (nonEmptyData[i].SignDetected !== current.SignDetected) {
					resultArray.push(current)
					current = nonEmptyData[i]
				}
			}

			resultArray.push(current)

			//calculate count for each repeated sign
			const countMap = new Map()

			for (const item of resultArray) {
				const count = countMap.get(item.SignDetected) || 0
				countMap.set(item.SignDetected, count + 1)
			}

			const sortedArray = Array.from(countMap.entries()).sort(
				(a, b) => b[1] - a[1]
			)

			const outputArray = sortedArray
				.slice(0, 5)
				.map(([sign, count]) => ({ SignDetected: sign, count }))

			setDetectedData([])
		} else {
			setWebcamRunning(true)
			startTime = new Date()
			requestRef.current = requestAnimationFrame(animate)
		}
	}, [webcamRunning, gestureRecognizer, animate, detectedData])

	useEffect(() => {
		async function loadGestureRecognizer() {
			const vision = await FilesetResolver.forVisionTasks(
				"https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
			)
			const recognizer = await GestureRecognizer.createFromOptions(vision, {
				baseOptions: {
					modelAssetPath:
						// "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
						"./gesture_recognizer.task",
				},
				numHands: 2,
				runningMode: runningMode,
			})
			setGestureRecognizer(recognizer)
		}
		loadGestureRecognizer()
	}, [runningMode])

	return (
		<>
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth="sm">
					<Box component="main" sx={{ p: 3 }}>
						<div className="signlang_detection-container">
							<>
								<div style={{ position: "relative" }}>
									<canvas ref={canvasRef} className="signlang_canvas" />
									<Webcam
										audio={false}
										ref={webcamRef}
										// screenshotFormat="image/jpeg"
										mirrored={true}
										className="signlang_webcam"
										style={{ position: "absolute", left: 0, zIndex: -1 }}
									/>
								</div>

								<div className="signlang_data-container">
									<Button
										onClick={enableCam}
										variant="contained"
										color={webcamRunning ? "error" : "success"}
									>
										{webcamRunning ? "Stop" : "Start"}
									</Button>

									<div className="signlang_data">
										<p className="gesture_output">{gestureOutput}</p>
									</div>
								</div>

								{/* <div className="signlang_imagelist-container">
						<h2 className="gradient__text">Image</h2>
						
						<div className="signlang_image-div">
						{currentImage ? (
							<img src={currentImage.url} alt={`img ${currentImage.id}`} />
							) : (
								<h3 className="gradient__text">
								Click on the Start Button <br /> to practice with Images
								</h3>
								)}
								</div>
							</div> */}
							</>
						</div>
					</Box>
				</Container>
			</React.Fragment>
		</>
	)
}
export default HGR
