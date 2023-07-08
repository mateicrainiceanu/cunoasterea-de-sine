import Alert from "react-popup-alert";

import React from "react";

interface IAlert {
	type: string;
	text: string;
	show: boolean;
}

interface WProps {
	alert: IAlert;
	closeAlert: Function;
}

function WarningAlert({ alert, closeAlert }: WProps) {
	// function onCloseAlert() {
	// 	// setAlert({
	// 	// 	type: "",
	// 	// 	text: "",
	// 	// 	show: false,
	// 	// });
	// }

	// function onShowAlert(type: string) {
	// 	setAlert({
	// 		type: type,
	// 		text: "Demo alert",
	// 		show: true,
	// 	});
	// }

	return (
		<div>
			<Alert
				header={"Atenție"}
				btnText={"Înțeleg și sunt de acord"}
				text={alert.text}
				type={alert.type}
				show={alert.show}
				onClosePress={closeAlert}
				pressCloseOnOutsideClick={true}
				showBorderBottom={true}
				alertStyles={{
					overflow: "hidden",
					borderRadius: "20px",
					backgroundColor: "white",
					borderStyle: "solid",
					borderWeight: "5px",
					borderColor: "magenta",
					position: "absolute",
					textAlign: "center",
					padding: "5%",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				headerStyles={{}}
				textStyles={{}}
				buttonStyles={{
					backgroundColor: "magenta",
					color: "white",
					padding: "2%",
					textDecoration: "none",
					overflow: "hidden",
					borderRadius: "20px",
					margin: "4%",
				}}
			/>
		</div>
	);
}

export default WarningAlert;
