import React from "react";
export function Form() {
	return (
		<section id="form" className="container">
			<h1>Vrei să afli mai multe despre tine?</h1>
			<p>
				Poți completa acest quiz, cu răspunsurile tale, iar apoi, poți să-l recitești după mai mult timp, pentru a te
				cunoaște mai bine pe tine și pentru a deveni cea mai bună versiune a ta.
			</p>
			<form>
				<p>Care sunt cele mai mari realizări ale tale și cum te-au făcut să te simți?</p>
				<textarea></textarea>
				<hr />
				<p>Ce anume îți place să faci în timpul liber și cum te ajută asta să evoluezi?</p>
				<textarea></textarea>
				<hr />
				<p>Care sunt valorile tale fundamentale și cum te influențează acestea în alegerile tale?</p>
				<textarea></textarea>
				<hr />
				<p>Ce te face să te simți cu adevărat fericit în viață?</p>
				<textarea></textarea>
				<hr />
				<p>Care sunt cele mai mari frici sau îngrijorări ale tale și cum îți afectează viața de zi cu zi?</p>
				<textarea></textarea>
				<hr />
				<p>Care sunt cele mai mari obstacole cu care te-ai confruntat în viață și cum le-ai depășit?</p>
				<textarea></textarea>
				<p>Unde te vezi peste 10 ani?</p>
				<textarea></textarea>
			</form>

			<button
				className="print-btn btn-get-started"
				onClick={() => {
					window.print();
				}}>
				Print
			</button>
		</section>
	);
}
