import { SwotForm } from "./SwotForm";
import React, { useState } from "react";
import WarningAlert from "./WaringAlert";
import { FidgetSpinner } from "react-loader-spinner";
import PrintSection from "../../Components/PrintSection";

export function Swot() {
	const [analysis, setAnalysis] = useState({
		strengths: "",
		weeknesses: "",
		opportunities: "",
		threats: "",
	});

	const [alert, setAlert] = useState({
		type: "",
		text: "",
		show: false,
	});

	const [showSpinner, setShowSpinner] = useState(false);

	const [result, setResult] = useState([]);

	function alertUser() {
		setAlert({
			type: "warning",
			text: "Ce urmează să primesc, NU este un răspuns certificat psihologic și este doar un răspuns al inteligenței artificaile.",
			show: true,
		});
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	function userAgreed() {
		setShowSpinner(true);

		setAlert({
			type: "",
			text: "",
			show: false,
		});

		//TODO: Set up fetchrequest

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(analysis),
		};

		fetch(process.env.REACT_APP_PROXY + "/swot", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				setResult(data.splitText);
				window.scrollTo({
					top: 1200,
					behavior: "smooth",
				});
				setShowSpinner(false);
			});
	}

	function handleChange(e: any) {
		setAnalysis((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
		console.log(analysis);
	}

	return (
		<div className="container">
			<WarningAlert alert={alert} closeAlert={userAgreed} />
			<FidgetSpinner
				visible={showSpinner}
				height="80"
				width="80"
				ariaLabel="dna-loading"
				wrapperClass="dna-wrapper"
				ballColors={["#ff0000", "#00ff00", "#0000ff"]}
				backgroundColor="#fa47e8"
				wrapperStyle={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			/>
			<SwotForm analysis={analysis} handleChange={handleChange} />
			<div style={{ textAlign: "center" }}>
				<button className="btn-get-started" onClick={alertUser}>
					Trimite către AI
				</button>
			</div>

			<br />

			<h4>Aici {result.length === 0 ? "va apărea" : "a apărut"} rezultatul tău!</h4>

			{result.map((line, i) => (
				<p key={i}>{line}</p>
			))}

			<PrintSection />
		</div>
	);
}
