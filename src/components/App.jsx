import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Form from "./Form";

const App = () => {
	return (
		<React.Fragment>
			<main
				id="main-container"
				className="d-md-flex flex-md-row align-items-md-center justify-content-between row"
			>
				{/*MAIN TEXT SECTION*/}
				<section id="main-text" className="col-md-6">
					<h1 id="main-heading">Learn to code by watching others</h1>
					<p>
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</p>
				</section>

				{/*FORM SECTION*/}
				<section id="form-section" className="col-md align-self-md-center">
					<Banner />
					<Form />
				</section>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default App;
