import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Stres from "./Components/Stres";

import { createBrowserRouter } from "react-router-dom";
import Start from "./pages/Start";
import Intimidare from "./Components/Intimidare";
import Perspectivism from "./Components/Perspectivism";
import Dosar from "./pages/Dosar";
import Mecanisme from "./Components/Mecanisme";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "quiz",
		element: <Quiz />,
	},
	{
		path: "incepe",
		element: <Start />,
	},
	{
		path: "stres",
		element: <Stres />,
	},
	{
		path: "intimidare",
		element: <Intimidare />,
	},
	{
		path: "perspectivism",
		element: <Perspectivism />,
	},
	{
		path: "dosar",
		element: <Dosar />,
	},
	{
		path: "/mecanisme",
		element: <Mecanisme />,
	},
]);

export { router };
