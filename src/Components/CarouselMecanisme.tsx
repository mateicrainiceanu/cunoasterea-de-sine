import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";

function CarouselMecanisme() {
	const items = [
		{
			title: "Negarea",
			description:
				"Negarea realității psihice interne presupune în același timp afirmarea existenței acesteia - nu poți nega decât ceva ce exista. Astfel refulările pătrund în conștient sub forma negată. Recunoașterea acestor gânduri și dorințe reprimate ar produce o stare anxioasa extremă.",
		},
		{
			title: "Raționalizarea",
			description:
				"Raționalizarea este procedeul prin care încercăm sa dăm o explicație logică sau acceptabilă din punct de vedere moral unor înclinații, manifestări sau sentimente considerate inacceptabile și a căror cauză nu este percepută.",
		},
		{
			title: "Identificarea ",
			description:
				"Identificarea este situația în care eul unei persoane preia în mod inconștient anumite trăsături de la alta persoana. Un exemplu este lesinul cu caracter isteric al fiului cu tatăl decedat. O forma de identificare este identificarea cu agresorul, un mijloc de apărare utilizat în relațiile cu obiectele lumii exterioare cărora subiectul nu poate sa le facă fata. Un exemplu este cel al victimei care se transforma in agresor.",
		},
		{
			title: "Proiecția ",
			description: `Proiecția este atribuirea propriilor caracteristici, sentimente, dorințe sau trăsături de caracter pe care nu ni le dorim sau nu le cunoaștem, unor obiecte sau persoane din exterior.
transportarea unui element al spațiului său psihic intern într-o lume care îi este externă: un obiect sau o persoană.`,
		},
		{
			title: "Deplasarea ",
			description:
				"Deplasarea reprezintă asocierea unei încărcături afective cu un obiect sau eveniment aflat în într-o relație de contiguitate cu cele inițiale care au provocat starea afectivă. Un exemplu este cel al părintelui care își descarcă nervii pe copil, atunci când a fost pus într-o situație frustrantă de către șef la serviciu.",
		},
		{
			title: "Refularea",
			description:
				"Refularea este cel mai vechi, mai important și mai cunoscut mecanism defensiv in psihanaliza, acest concept născându-se odată cu cel de subconștient. Prin procesul de refulare sunt păstrate în subconștient toate acele reprezentări pulsionale interzise de supraeu. Refularea este un mecanism de baza în nevroza, dar și un proces normal în viața cotidiană.",
		},
		{
			title: "Sublimarea",
			description:
				"Sublimarea se referă la transformarea impulsurilor instinctuale în activități acceptate de societate, cum ar fi utilizarea energiei instinctului sexual în scopuri artistice, sau a impulsurilor agresive într-un sport.",
		},
		{
			title: "Formațiunea reacțională",
			description:
				"Formațiunea reacțională reprezintă dezvoltarea unei atitudini sau comportament în sens opus cu o tendința instinctuala refulata. ",
		},
		{
			title: "Regresiunea ",
			description:
				"este procesul de întoarcere la un stadiu de dezvoltare psihică anterior, fie ca este vorba despre gândire, sentiment sau comportament. Un exemplu este divorțul intentat de soț, pentru a se căsători cu o iubită din tinerețe.",
		},
		{
			title: "",
			description: "",
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	function next() {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	function previous() {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	function goToIndex(newIndex: number) {
		if (animating) return;
		setActiveIndex(newIndex);
	}

	return (
		<Carousel activeIndex={activeIndex} next={next} previous={previous} interval={15000}>
			{items.map((item, index) => (
				<CarouselItem key={index} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
					<div className="d-block w-100">
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				</CarouselItem>
			))}

			<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
			<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
			<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
		</Carousel>
	);
}

export default CarouselMecanisme;
