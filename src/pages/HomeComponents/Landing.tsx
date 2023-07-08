import React from "react";

function Landing() {
	return (
		<section id="acasa">
			<div
				className="carousel-item active image-bg"
				style={{
					backgroundImage: "url(https://www.definebusinessterms.com/wp-content/uploads/2021/11/autoconocimiento.jpg)",
				}}>
				<div className="carousel-container">
					<div className="container">
						<h2 className="">Cunoașterea de sine.</h2>
						<p className="">
							<a href="#dece" className="de-ce">
								#DECE?
							</a>{" "}
							este important să te cunoști pe tine? <br />
							Ajungi cea mai bună versiune a ta!
						</p>
						<a href="#scurta-descriere" className="btn-get-started">
							Află mai multe
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Landing;
