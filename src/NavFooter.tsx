import React from "react";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
	const [collapsed, setCollapsed] = useState(true);

	function toggleNavbar() {
		setCollapsed(!collapsed);
	}

	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary" style={{padding: "2%"}}>
				<Navbar.Brand href="/">
					<h1 className="logo">Cunoașterea de sine</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
				<Navbar.Collapse id="basic-navbar-nav" className={collapsed ? "collapse" : ""}>
					<Nav className="ms-auto bg-body-tertiary nav-colappsed">
						<Nav.Link href="/">Acasă</Nav.Link>
						<Nav.Link href="/incepe">Începe</Nav.Link>
						<Nav.Link href="/dosar">Dosar</Nav.Link>
						<Nav.Link href="/quiz">Quiz</Nav.Link>
						<Nav.Link href="/swot">SwotAI</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* <nav className="navbar navbar-expand-lg bg-body-tertiary ">
				<div className="container-fluid bg-body-tertiary">
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
			</nav> */}
		</>
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
						<br />
						<b>Concursul Național Istorie și Societate în Dimensiune Virtuală</b>
					</p>
					<div className="credits">© Designed by Crăiniceanu Matei</div>
				</div>
			</footer>
		</>
	);
}

export { NavBar as Nav, Footer };
