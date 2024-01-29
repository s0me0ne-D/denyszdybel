import React from "react";
import "./App.css";
import { Title } from "./parts/title/Title";
import { About } from "./parts/about/About";
import { Skills } from "./parts/skills/Skills";
import { Projects } from "./parts/projects/Projects";

function App() {
	return (
		<div className="App">
			<Title />
			<About />
			<Skills />
			<Projects />
			<Title />
		</div>
	);
}

export default App;
