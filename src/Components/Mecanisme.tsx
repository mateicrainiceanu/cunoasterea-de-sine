import React from "react";
import CarouselMecanisme from "./CarouselMecanisme";
import { TAreaQ } from "./TAreaQ";
import PrintSection from "./PrintSection";

function Mecanisme() {
	return (
		<main className="main">
			<div className="inner-page container">
				<MecanismeHead />

				<p>
					Mecanismele de defensa identificate in psihanaliza reprezinta procedeele psihice prin care eul este menajat de
					confruntarea directă cu conținutul subconștientului, adică pulsiunile și refularile. Aceste mecanisme de
					apărare oferă un refugiu in fata situatiilor la care nu putem face fata. Astăzi lista mecanismelor de defensa
					este uriașă și nu exista un consens în privința numărului acestora. Printre primele identificate se numără:
				</p>

				<p>
					Mecanismele de aparare descrise in psihanaliza nu implica neaparat patologicul. Acestea fac parte din sistemul
					Eului și servesc la adaptare și sunt în mod normal folosite în viața de zi cu zi, care fără ele ar fi
					imposibilă sau prea angoasanta. Starea patologică apare atunci cand, prin rigiditate și utilizare persistentă,
					aceste mecanisme devin o piedică în gandire si acțiune, producand un comportament inadaptat.
				</p>

				<div className="carousel">
					<CarouselMecanisme />
				</div>

				<TAreaQ qText={"Care este mecanismul cu care te confrunți cel mai des?"} />

				<TAreaQ qText={"Numește o sitație recentă în care ai reacționat într-un fel descris mai sus?"} />

				<PrintSection />
			</div>
		</main>
	);
}

function MecanismeHead() {
	return (
		<>
			<div className="row">
				<div className="col-lg-6">
					<a href="/mecanisme">
						<h3>Cum te aperi inconștient?</h3>
					</a>

					<p>
						Poate că ai observat, sau nu, că atunci când te confrunți cu situații mai dificile, reacționezi diferit, și
						încerci să percepi realitate alfel. Cel mai facil exemplu în acest sens este atunci când nu îți dorești să
						crezi ce ai aflat, când nu-ți vine să crezi.
					</p>
				</div>
				<div className="col-lg-6">
					<img
						className="img-jum"
						src="https://res.cloudinary.com/psihomaestru/images/f_webp,q_auto/v1632137224/mecanisme-de-aparare-e1612204026931/mecanisme-de-aparare-e1612204026931.jpg?_i=AA"
						alt="stres"
					/>
				</div>
			</div>
		</>
	);
}

export default Mecanisme;
export { MecanismeHead };
