import React from "react";
import { SlideName } from "./components/SlideName";
import "./navBar.scss";

export const NavBar = () => {
	const slidesNames = ["about", "skills", "projects", "contacts"];
	return (
		<div className="navBar">
			{slidesNames.map((name) => (
				<SlideName name={name} />
			))}
		</div>
	);
};
