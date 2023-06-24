import React from "react";

function Nav() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary ">
			<div className="container-fluid white-bg">
				<a className="navbar-brand" href="/">
					<h1 className="logo">Cunoașterea de sine</h1>
				</a>
				<div className="ms-auto">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" href="/#acasa">
									Acasă
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/incepe">
									Începe!
								</a>
							</li>
							<li className="nav-item">
								<a className="getstarted" href="/quiz">
									Take the quiz!
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* <header id="header" className="d-flex align-items-center">
	  <div className="container d-flex align-items-center">
		  <h1 className="logo">
			  <a href="/">Cunoașterea de sine</a>
		  </h1>

		  <nav id="navbar" className="navbar ms-auto">
			  <button
				  className="navbar-toggler"
				  type="button"
				  data-bs-toggle="collapse"
				  data-bs-target="#navbarSupportedContent"
				  aria-controls="navbarSupportedContent"
				  aria-expanded="false"
				  aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon">
					  <i className="bi bi-list mobile-nav-toggle"></i>
				  </span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				  <ul className="navbar-nav">
					  <li className="nav-item">
						  <a className="nav-link" href="/#acasa">
							  Acasă
						  </a>
					  </li>
					  <li className="nav-item">
						  <a className="nav-link" href="/incepe">
							  Începe!
						  </a>
					  </li>
					  <li className="nav-item">
						  <a className="getstarted" href="/quiz">
							  Take the quiz!
						  </a>
					  </li>
				  </ul>
			  </div>
		  </nav>
	  </div>
  </header> */}
		</nav>
	);
}

function Footer() {
	return (
		<>
			<footer id="footer">
				<div className="container">
					<h3>Cunoașterea de sine</h3>
					<p>
						Proiect realizat de către Crăiniceanu Matei - elev la liceul Teoretic "Nikolaus Lenau", Timișoara
						<br />
						Coordonator: prof. Angela Avrămuț
					</p>
					<div className="credits">© Designed by Crăiniceanu Matei</div>
				</div>
			</footer>
		</>
	);
}

export { Nav, Footer };
