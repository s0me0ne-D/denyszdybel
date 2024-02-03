import React from "react";
import "./title.scss";
import { Name } from "./name/Name";
import { CodeBackground } from "./code/CodeBackground";

export const Title = () => {
	return (
		<div className="title">
			<CodeBackground />
			<span>
				<span className="appears-down-1">Hi, I am</span> <br />
				<Name />
			</span>
			<span className="title_description appears-down-1">Front-End Developer</span>
		</div>
	);
};
