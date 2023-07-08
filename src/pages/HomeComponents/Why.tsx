import React from "react";

function Why() {
	return (
		<section id="dece" className="services">
			<div className="container">
				<div className="section-title">
					<h2>
						<a href="#dece" className="de-ce">
							#DECE?
						</a>
					</h2>
					<p>... este important să ne punem aceasta întrebare?</p>
				</div>

				<div className="row">
					<div
						className="col-lg-4 col-md-6 d-flex align-items-stretch"
						data-aos="zoom-in"
						data-aos-delay="100">
						<div className="icon-box iconbox-blue">
							<h4>Aflăm mai multe</h4>
							<p>
								Aceasta este întrebarea pe care si-o pun copiii la început, când încep să cunoască
								lumea.
							</p>
						</div>
					</div>

					<div
						className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
						data-aos="zoom-in"
						data-aos-delay="200">
						<div className="icon-box iconbox-orange">
							<h4>Cercetăm</h4>
							<p>Cum cât ne punem mai des această întrebare, cu atât mai multe vom afla.</p>
						</div>
					</div>

					<div
						className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
						data-aos="zoom-in"
						data-aos-delay="300">
						<div className="icon-box iconbox-pink">
							<h4>Înțelegem mai bine</h4>
							<p>
								Dacă ne vom pune această întrebare, legată de orice subiect, vom înțelegemai bine
								acel subiect.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Why;
