import React from "react";
import "./title.scss";
import { Name } from "./name/Name";
import { CodeBackground } from "./code/CodeBackground";

export const Title = () => {
	return (
		<div className="title">
			<CodeBackground />
			<span>
				Hi, I am <br />
				<Name />
			</span>
			<span className="title_description">Font-End Developer</span>
		</div>
	);
};
