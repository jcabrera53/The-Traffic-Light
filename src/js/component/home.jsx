import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	/*const [light, setLight] = useState(); */
	return (
		<div className="main-content">
		<h1 className="text-center mt-5">The Traffic Light</h1>
			<div className="cuerpo">
				<div className="red"></div>
				<div className="yellow"></div>
				<div className="green"></div>				
			</div>
			</div>
	);
};

export default Home;
