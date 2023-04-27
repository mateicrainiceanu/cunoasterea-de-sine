import React from "react";
export function Swot() {
  return <div className="container">
					<h1>Analiza SWOT</h1>
					<p>Dacă vrei să te cunoști mai bine, încearcă să completezi sincer acest formular.</p>

					<div className="row">
						<div className="col-lg-6">
							<h6>Care sunt punctele tale tari?</h6>
							<textarea></textarea>
						</div>
						<div className="col-lg-6">
							<h6>Care sunt punctele tale slabe?</h6>
							<textarea></textarea>
						</div>
						<div className="col-lg-6">
							<h6>Ce oportunități ai la momentul actual în viața ta?</h6>
							<textarea></textarea>
						</div>
						<div className="col-lg-6">
							<h6>De ce te simți amenințat la momentul acesta?</h6>
							<textarea></textarea>
						</div>
					</div>
				</div>;
}
  