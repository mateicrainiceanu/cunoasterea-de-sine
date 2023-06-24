import React from "react";

function PrintSection() {
	return (
		<>
			<div className="row">
				<div className="col-lg-6" style={{ textAlign: "center" }}>
					<button
						className="btn-get-started "
						onClick={() => {
							window.print();
						}}>
						Print
					</button>
				</div>
				<div className="col-lg-6">
					<h5>Salvează-ți progresul</h5>
					<p>
						Îți propunem să printezi fiecare pagină parcursă pentru și să o pui într-un dosar! Află mai multe despre{" "}
						<a href="/dosar">dosarul</a> tău!
					</p>
				</div>
			</div>
		</>
	);
}

export default PrintSection;
