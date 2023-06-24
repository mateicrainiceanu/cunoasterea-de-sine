import React from "react";
import { TAreaQ } from "./TAreaQ";

function Perspectivism() {
	return (
		<main className="main">
			<div className="inner-page container">
				<PerspectivismHeader />

				<div className="row">
					<div className="col-lg-6">
						<p>
							Perspectivismul este un principiu conform căruia percepția și cunoașterea a ceva sunt întotdeauna legate
							de perspectivele interpretative ale celor care îl observă. În timp ce perspectivismul nu consideră toate
							perspectivele și interpretările ca fiind de adevăr sau valoare egală, el susține că nimeni nu are acces la
							o viziune absolută a lumii tăiată din perspectivă. În schimb, toate aceste vizionari au loc dintr-un
							anumit punct de vedere care, la rândul său, afectează modul în care sunt percepute lucrurile. În loc să
							încerce să determine adevărul prin corespondență cu lucruri din afara oricărei perspective,
							perspectivismul caută astfel, în general, să determine adevărul prin compararea și evaluarea
							perspectivelor între ele.
						</p>

						<p>
							Principiul de bază conform căruia lucrurile sunt percepute diferit din perspective diferite a fost uneori
							considerat ca o formă rudimentară, necontențioasă de perspectivism. Practica de bază a comparării
							perspectivelor contradictorii una cu alta poate fi considerată, de asemenea, o astfel de formă de
							perspectivism, la fel ca întreaga problemă filosofică a modului în care cunoașterea adevărată trebuie să
							pătrundă în limitele de perspectivă.
						</p>
					</div>
					<div className="col-lg-6">
						<img
							className="img-fit"
							src="https://media.istockphoto.com/id/1297781329/vector/two-men-meaning-if-glass-is-half-empty-or-half-full-vector-cartoon-stick-figure-illustration.jpg?s=612x612&w=0&k=20&c=1cxJdc1HWFwbW_4gC1v-7_v1kpRzFeMtjKmIIEzNdKs="
							alt="perspective diferite"
						/>
					</div>
				</div>

				<TAreaQ
					qText={
						"Când a fost ultima dată când ai avut un confilic cu cineva din cauza faptului că ați avut un punct diferit de vedere?"
					}
				/>
			</div>
		</main>
	);
}

function PerspectivismHeader() {
	return (
		<>
			<div className="row">
				<div className="col-lg-6">
					<a href="/perspectivism">
						<h3>Cunoaște un lucru din toate perspectivele...</h3>
					</a>

					<p>
						În general oamenii au diferite puncte de vedera asupra diferitor subiecte. Nu întotdeauna un om are dreptate
						și ceilalți nu, totul ține de perspectivă. De asemenea trebuie să te privești și pe tine din mai multe
						perspective. Și astfel să afli calitățile și defectele tale.
					</p>
				</div>
				<div className="col-lg-6">
					<img
						className="img-jum"
						src="https://media.istockphoto.com/id/538068021/vector/two-points-of-view.jpg?s=612x612&w=0&k=20&c=cCoaRpwcGJ29kQ5lM2IZ0j2xEff8G79vrtlYKZnPM-o="
						alt="stres"
					/>
				</div>
			</div>
		</>
	);
}

export default Perspectivism;
export { PerspectivismHeader };
