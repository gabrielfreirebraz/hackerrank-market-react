import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import products from "../../data/products";
import Cart from "../Cart";
import Navbar from "../Navbar";
import "./index.css";

function HackerMart() {

	return (
		<div className="hacker-mart">
			<div className="layout-column align-items-center justify-content-start">
				<Navbar data-testid="header" />
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/cart" element={<Cart/>} />
				</Routes>
			</div>
		</div>
	);
}

export default HackerMart;
