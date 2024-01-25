import React from "react";
import "./App.css";
import { Title } from "./parts/title/Title";
import { About } from "./parts/about/About";

function App() {
	return (
		<div className="App">
			<Title />
			<About />
		</div>
	);
}

export default App;
