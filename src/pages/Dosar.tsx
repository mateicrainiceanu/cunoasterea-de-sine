import React from "react";

function Dosar() {
	return (
		<div className="inner-page container main dosar">
			<div className="row">
				<div className="col-lg-6">
					<img
						className="img-fit"
						src="https://www.bnb.ro/images/products/bb_nw/PDOSPLINA25-Dosar-plastic-A4-cu-sina-si-perforatii-diverse-culori-25-buc-set-Noki_179206.jpg"
						alt="dosar"
					/>
				</div>
				<div className="col-lg-6">
					<h2>Dosarul despre tine</h2>
					<p>
						Noi îți propunem să facu un dosar unde să pui toate informațiile pe care le-ai dobândit de pe acest site,
						alături de notițele și răspunsuirle tale din câmpurile speciale de pe paginile dedicate cunoașterii de sine.{" "}
					</p>
					<p>
						Astfel la finalul dosarului vei avea o privire de ansamblu asupra lucuruilor care te definesc și îți
						influențează algerile de zi cu zi.{" "}
					</p>
					<p>
						Îți recomandăm să âncepi din secțiunea <a href="/incepe"> Începe</a> a site-ului nostru, unde vei găsi
						informații despre factori care te influențează cum ar fi:
					</p>
					<ul>
						<li>Stresul</li>
						<li>Intimidarea și formele ei</li>
						<li>Perspectivismul</li>
					</ul>

					<h3>Dosarul cunoașterii amănunțit</h3>

					<p>Pentru a avea o privire de ansamblu despre tine, îți recomandăm să începi dosarul în această ordine:</p>
					<ul>
						<li>
							<a href="/quiz">Quizul</a> despre obiectivele tale
						</li>
						<li>
							Secțiunea <a href="/incepe"> Începe să te cunoști mai bine</a>
						</li>
						<li>
							Din nou <a href="/quiz">quizul</a> pentru a vedea ce s-a schimbat
						</li>
					</ul>
                    <p>O să dureze puțin să completezi tot dosarul, mai ales în forma lui amânunțită, dar cel mai bine este să nu te grăbești și să îți aloci timp pentru acest dosar pentru a deveni cea mai bună versiune a ta. </p>
				</div>
			</div>
		</div>
	);
}

export default Dosar;
