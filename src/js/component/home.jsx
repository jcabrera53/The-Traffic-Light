import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const red_on ="red-on";
	const yellow_on ="yellow-on";
	const green_on ="green-on";
	const red_off ="red-off";
	const yellow_off ="yellow-off";
	const green_off ="green-off";

	const [lightRed, setLightRed] = useState(red_off);
	const [lightYellow, setLightYellow] = useState(yellow_off);
	const [lightGreen, setLightGreen] = useState(green_off);

	return (
		<div className="main-content">
		<h1 className="text-center mt-5">The Traffic Light</h1>
			<div className="cuerpo">
				<div className={lightRed} onClick={()=>setLightRed(red_on) + setLightYellow(yellow_off) + setLightGreen(green_off)}></div>
				<div className={lightYellow} onClick={()=>setLightYellow(yellow_on) + setLightRed(red_off) + setLightGreen(green_off)}></div>
				<div className={lightGreen} onClick={()=>setLightGreen(green_on) + setLightYellow(yellow_off) + setLightRed(red_off)}></div>				
			</div>
			</div>
	);
};

export default Home;
