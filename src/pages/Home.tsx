import {
	Box,
	Toolbar,
	Typography,
	Container,
	CssBaseline,
	Grid,
	Button,
} from "@mui/material"
import * as React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

function Home() {
	return (
		<>
			<React.Fragment>
				<Container maxWidth="sm">
					<Box>
						<Grid container spacing={3}>
							{/* header */}
							<Grid xs={12} md={4}>
								<Toolbar />
								<Toolbar />
								<Typography sx={{ fontSize: 40, textAlign: "center" }}>
									Learn from anywhere.
								</Typography>
								<Typography sx={{ fontSize: 40, textAlign: "center" }}>
									At anytime.
								</Typography>
							</Grid>
							{/* carousel */}
							<Grid xs={12} md={8} sx={{ padding: "30px" }}>
								<Toolbar />
								<Toolbar />
								<Carousel
									autoPlay={true}
									dynamicHeight={true}
									infiniteLoop={true}
									interval={8000}
									showArrows={false}
									showStatus={false}
									showIndicators={false}
									showThumbs={false}
								>
									<div>
										<img src="./images/home-img-1.jfif" />
									</div>
									<div>
										<img src="./images/home-img-2.jfif" />
									</div>
									<div>
										<img src="./images/home-img-3.jfif" />
									</div>
								</Carousel>
								<Toolbar />
							</Grid>
							{/* buttons */}
							<Grid xs={12} md={6}>
								<div style={{ alignItems: "center", paddingLeft: "25px" }}>
									<Typography>Begin working on your gestures</Typography>
									<Button
										sx={{
											variant: "outlined",
											backgroundColor: "#3559E0",
											color: "#000",
											size: "large",
											margin: "20px",
										}}
										href="/hgr"
									>
										Start Now
									</Button>
								</div>

								<Toolbar />
							</Grid>
							<Grid xs={12} md={6} sx={{ alignItems: "center" }}>
								<div style={{ alignItems: "center", paddingLeft: "25px" }}>
									<Typography>Get familiar with EthSL alphabets</Typography>
									<Button
										sx={{
											variant: "outlined",
											backgroundColor: "#3559E0",
											color: "#000",
											size: "large",
											margin: "20px",
										}}
										href="/learn"
									>
										Learners Hub
									</Button>
									<Toolbar />
								</div>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</React.Fragment>
		</>
	)
}
export default Home
