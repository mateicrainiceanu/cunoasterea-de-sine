import React from "react";
import { TAreaQ } from "./../Components/TAreaQ";
import PrintSection from "./PrintSection";

export default function Stres() {
	return (
		<>
			<main className="main">
				<section className="inner-page container">
					<StresHeading />

					<TAreaQ qText={"Când te-ai simțit ultima dată stresat?"} />
					<TAreaQ qText={"Ce ai greșit într-o situație de stres?"} />
					<TAreaQ qText={"Când ai luat o pauză pentru că erai prea stresat?"} />

					<p>
						Științific vorbind stresul este termenul general utilizat pentru orice factor din mediu capabil să provoace
						la om și la animale o stare de tensiune și o reacție de alarmă a organismului.
					</p>
					<p>
						Deci este ok să ai această reacție de alarmă, dar ea trebuie gestionată corect. Prima metodă prin care poți
						face asta, sunt prin a-ți regla respirația. Chiar{" "}
						<a href="https://www.youtube.com/watch?v=P9BaJWnIRNU&pp=ygUoZXhlcmNpdGlpIGRlIHJlc3BpcmF0aWUgcGVudHJ1IGFueGlldGF0ZQ%3D%3D">
							aici
						</a>{" "}
						poți viziona un videoclip pentru a te liniști atunci când ești stresat(ă)
					</p>

					<h3>Este stresul benefic sau malefic? </h3>

					<div className="row">
						<div className="col-lg-6 ">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">
										<i className="bi bi-check-square-fill"></i> Stresul acut
									</h4>
									<p className="card-text">
										Stresul pe o scurta perioada de timp este benefic. Stresul este în esență răspunsul corpului nostru
										la orice formă de posibilă amenințare. Atunci când percepi un pericol – chiar dacă este unul real
										sau imaginar – corpul răspunde automat la acesta, printr-un proces denumit reacție de „fugă sau
										luptă”. Când o posibilă amenințare este percepută, sistemul nervos răspunde prin eliberarea
										hormonilor stresului (precum adrenalină și cortizolul), care activează starea de urgență a corpului.
										Inima îţi bate mai tare, mușchii se încordează, presiunea arterială crește, respirația se
										intensifică și simțurile devin mai ascuțite.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6 ">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">
										<i className="bi bi-exclamation-square-fill"></i> Stresul cronic
									</h4>
									<p className="card-text">
										Dar în dozaj de lungă durata poate cauza numeroase probleme de sănătate. Atunci vorbim de stres
										cronic - apare atunci când o persoană nu vede o cale de ieșire dintr-o situație dificilă, se simte
										fără speranţă şi renunţă la căutarea soluţiilor: majoritatea legate de inima, dar și ale altor
										organe (nu vom vorbi despre stresul cronic). Stresul acut episodic apare atunci când o persoană este
										stresată în mod constant, iar stresul acut se transformă dintr-o experiență ocazională într-un stil
										de viață. Simptomele stresului acut episodic sunt mai intense decât în cazul stresului acut și pot
										cauza dificultăți mai mari în viața de zi cu zi.
									</p>
								</div>
							</div>
						</div>
					</div>

					<h3>Ce simți când ești stresat?</h3>

					<div className="row">
						<div className="col-lg-4">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">Simptome cognitive ale stresului</h4>
									<p className="card-text">
										<ul>
											<li>Probleme de memorie și de organizare</li>
											<li>Scăderea puterii de concentrare</li>
											<li>Dificultăți în a judeca</li>
											<li>Pesimismul</li>
											<li>Gânduri anxioase</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">Simptome emoționale ale stresului</h4>
									<p className="card-text">
										<li>Depresie sau o stare generală de nefericire</li>
										<li>Anxietate și agitație</li>
										<li>Iritabilitate sau chiar furie</li>
										<li>Senzația de a fi copleșit</li>
										<li>Singurătatea, izolarea de ceilalți</li>
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">Simptome fizice ale stresului</h4>
									<p className="card-text">
										<li>Energie scăzută, oboseală</li>
										<li>Dureri în diverse zone ale corpului</li>
										<li>Încordarea mușchilor</li>
										<li>Insomnie</li>
										<li>Transpirația excesivă</li>
										<li>Amețeală ori senzații de greață</li>
									</p>
								</div>
							</div>
						</div>
					</div>

					<h3>Ce poți face ca să te destresezi?</h3>

					<p>Modalitățile de combatere a stresului sunt multiple, însă necesita efort, consecvența și perseverență:</p>
					<div className="row">
						<div className="col-lg-4">
							<img className="img-fit" src="https://www.kudika.ro/storage/articles/66444/1636539990.jpg" alt="Stres" />
						</div>

						<div className="col-lg-8">
							<ul>
								<li>
									Activitate fizica regulata, sport, plimbări. Sedentarismul, activitățile "staționare" precum
									vizionarea unui film sau utilizarea ecranelor pentru a verifica ce este nou pe rețele sociale, nu fac
									decat sa sporeasca stresul resimtit.
								</li>
								<li>
									Adoptarea și practicarea unor tehnici de relaxare, pot fi ședințe de masaj, yoga, dar si meditație
									individuala.
								</li>
								<li>
									Pe cât posibil, păstrarea simțului umorului ca modalitate de a face fata stresului. Menținerea unei
									atitudini pozitive: ajută la crearea unui echilibru între optimism și realitate (situațiile dificile
									nu trebuie negate, dar nici nu trebuie permis ca gândurile să copleșească sau să acopere realitatea)/
								</li>
								<li>Alocarea unui timp special (mai mult timp) dedicat familiei și apropiaților, prietenilor.</li>
								<li>
									Identificarea unor hobby-uri care ajuta mintea sa se relaxeze, găsirea unor preocupări plăcute care
									suscită interes și implicarea prin acordarea de atenție 100% sarcinii respective.
								</li>
								<li>
									Un regim alimentar echilibrat, fără excese, inclusiv fără excese de cofeina sau alcool și menținerea
									unei rutine, a unui program de somn. ascultarea muzicii.
								</li>
							</ul>
						</div>
					</div>

					<p>
						Dar cel mai bine este ca dacă te confunți cu asemenea probleme și simți că stresul te copleșeste, este bine
						să apelezi la{" "}
						<a href="https://hedepy.ro">
							<b>ajutor specializat</b>
						</a>
						. Am atașat un link, unde poți vorbi cu cineva, dar desigur, trebuie să găsești varianta de psihoterapie
						care să ți se potrivească.
					</p>

					<PrintSection></PrintSection>
				</section>
			</main>
		</>
	);
}

export function StresHeading() {
	return (
		<div className="row">
			<div className="col-lg-6">
				<a href="/stres">
					<h3>Stresul</h3>
				</a>

				<p>
					Cu toții reacționăm diferit sub stres. Unii nu se pot concentra, alții refuză să mai colaboreze și alții sunt
					mai productivi. Cu toții ne putem dezvolta o capacitate ca să gestionăm perioadele stresante din viața
					noastră, și sunt multe moduri în care poți face asta. Dar mai întâi trebuie să știi cum te afectează stresul
					pe tine. Așa că o să te rog să răspunzi în scris la următoarele întrebări:
				</p>
			</div>
			<div className="col-lg-6">
				<img
					className="img-jum"
					src="https://www.reginamaria.ro/sites/default/files/articol/2019%3A03/29articol_factori_de_stres_frecventi.jpg"
					alt="stres"
				/>
			</div>
		</div>
	);
}
