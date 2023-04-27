import { Form } from './QuizComponents/Form';
import { Swot } from './QuizComponents/Swot';
import  Bar  from './QuizComponents/Bar';
import React from "react";

function Quiz() {
	return (
		<main className="main">
			<Bar     />

			<section className="inner-page">
				<Swot     />

				<hr />

				<Form     />
			</section>
		</main>
	);
}

export default Quiz;
