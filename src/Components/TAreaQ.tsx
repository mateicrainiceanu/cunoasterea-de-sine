import React from "react";

interface QuestionProps {
    qText: String
}


export function TAreaQ({qText}: QuestionProps) {
	return (
		<>
			<h6>{qText}</h6>
			<textarea></textarea>
		</>
	);
}
