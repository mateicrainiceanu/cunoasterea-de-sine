import React from "react";

interface Analysis {
	strengths: string,
	weeknesses: string,
	opportunities: string,
	threats: string
}

interface FormProps {
	handleChange: any,
	analysis: Analysis
}

export function SwotForm({
  handleChange, analysis
}: FormProps) {
  return <><h1>Analiza SWOT</h1>
			<h3>interpretată de un AI...</h3>

			<p>
				Dacă vrei să te cunoști mai bine, încearcă să completezi sincer acest formular. <br />
				Este un formular, care apoi va fi formatat și trimis către un AI, care îți va da în cel mai scurt timp
				interpretarea acestei analize și niște sfaturi. <br />
				În funcție de conexiunea ta la internet vei primi un răspuns după câteva secunde. <br />
				Trebuie să ții cont că răsunsul este dat de inteligența artificială, și nu este verificat sau cercetat din punct
				de vedere științific.{" "}

				Datele dvs. sunt în siguranță, conexiunule securizate, iar la OpenAI se trimit doar răspunsurile dvs. 
			</p>

			<div className="row">
				<div className="col-lg-6">
					<h6>Care sunt punctele tale tari?</h6>
					<textarea rows={5} name="strengths" value={analysis.strengths} onChange={handleChange} />
				</div>
				<div className="col-lg-6">
					<h6>Care sunt punctele tale slabe?</h6>
					<textarea rows={5} name="weeknesses" value={analysis.weeknesses} onChange={handleChange} />
				</div>
				<div className="col-lg-6">
					<h6>Ce oportunități ai la momentul actual în viața ta?</h6>
					<textarea rows={5} name="opportunities" value={analysis.opportunities} onChange={handleChange} />
				</div>
				<div className="col-lg-6">
					<h6>De ce te simți amenințat la momentul acesta?</h6>
					<textarea rows={5} name="threats" value={analysis.threats} onChange={handleChange} />
				</div>
			</div>
  </>;
}
  