import { RouterProvider } from "react-router-dom";
import { Nav, Footer } from "./NavFooter";
import { router } from "./router";

function App() {
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	return (
		<>
			<Nav />
			<RouterProvider router={router} />
			<i onClick={scrollToTop} className="bi bi-arrow-up-square-fill scroll-up-btn"></i>
			<Footer />
		</>
	);
}

export default App;
