import React from "react";

import { StresHeading } from "./../Components/Stres";
import { IntimidareHeading } from "../Components/Intimidare";
import { PerspectivismHeader } from "../Components/Perspectivism";

function Start() {
	return (
		<main className="main">
			<section className="inner-page container">
				<h1>Începe să te cunoști mai bine</h1>
				<p>
					Ți-am prezentat aici de ce este important să te cunoști pe tine și cum poți face asta. În această secțiune
					vrem să te ajutăm să te cunoști pe tine și astfel vrem să te ajutăm să devii cea mai bună versiune a ta.
				</p>
				<p>
					Vrem să începem acest drum împreună cu tine, să îți prezentăm factorii externi care îți influențează
					comportamentul și astfel să te ajutăm spre a-ți atinge potențialul maxim. Printre factorii pe care ii vom
					explora împreună se află:
				</p>

				<hr />

				<StresHeading />

				<hr />

				<IntimidareHeading />

				<hr />

				<PerspectivismHeader />
			</section>
		</main>
	);
}

export default Start;
