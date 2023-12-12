import * as React from "react"
import ReactDOM from "react-dom"
import "./App.css"
// import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import HGR from "./pages/HGR"
import Learn from "./pages/Learn"
import Nav from "./pages/Nav"

export default function App() {
	return (
		<>
			<Nav />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="hgr" element={<HGR />} />
					<Route path="learn" element={<Learn />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
