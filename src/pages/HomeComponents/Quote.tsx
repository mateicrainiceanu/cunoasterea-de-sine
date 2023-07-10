import React from "react";

function Quote() {
	return (
		<div className="quote">
			<div className="main container">
				<div className="row ">
					<div className="col-lg-8 ">
						<div className="qoutecontainer">
							<h2>Citat</h2>

							<p className="text">
								Oricine este un geniu, dar dacă judeci un pește după abilitatea lui de a se urca în copac, el va trăi
								toată viața crezând ca este un prost.
							</p>

                            <p className="author">Albert Einstein</p>
						</div>
					</div>

					<div className="col-lg-4">
						<img
							src="https://www.nobelprize.org/images/einstein-12923-content-portrait-mobile-tiny.jpg"
							alt="Albert Einstein"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Quote;
