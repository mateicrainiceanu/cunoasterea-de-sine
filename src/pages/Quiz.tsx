import { Form } from "./QuizComponents/Form";
import { Swot } from "./QuizComponents/Swot";
import React from "react";

function Quiz() {
	return (
		<main className="main">
			<section className="inner-page">
				<Swot />

				<hr />

				<Form />
			</section>
		</main>
	);
}

export default Quiz;
