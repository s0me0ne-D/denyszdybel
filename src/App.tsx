import React from "react";
import "./App.css";
import { Title } from "./parts/title/Title";
import { About } from "./parts/about/About";
import { Skills } from "./parts/skills/Skills";

function App() {
	return (
		<div className="App">
			<Title />
			<About />
			<Skills />
		</div>
	);
}

export default App;
