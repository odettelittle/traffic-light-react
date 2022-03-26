import React from "react";

//create your first component
export function Home() {
	const [selectedRed, setSelectedRed] = React.useState(false);
	const [selectedYellow, setSelectedYellow] = React.useState(false);
	const [selectedGreen, setSelectedGreen] = React.useState(false);

	return (
		<div className="traffic-light">
			<div
				className={selectedRed ? "light red glow" : "light red"}
				onClick={() => setSelectedRed(!selectedRed)}></div>
			<div
				className={
					selectedYellow ? "light yellow glow" : "light yellow"
				}
				onClick={() => setSelectedYellow(!selectedYellow)}></div>
			<div
				className={selectedGreen ? "light green glow" : "light green"}
				onClick={() => setSelectedGreen(!selectedGreen)}></div>
		</div>
	);
}

export default Home;
