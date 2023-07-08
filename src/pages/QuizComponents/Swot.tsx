import { SwotForm } from './SwotForm';
import React, { useState } from "react";

export function Swot() {
	const [analysis, setAnalysis] = useState({
		strengths: "",
		weeknesses: "",
		opportunities: "",
		threats: "",
	});

	function handleChange(e: any) {
		setAnalysis((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
		console.log(analysis);
	}

	return (
		<div className="container">
			<SwotForm  analysis={analysis} handleChange={handleChange}  />
			<div style={{ textAlign: "center" }}>
				<button className="btn-get-started">Trimite către AI</button>
			</div>
		</div>
	);
}
