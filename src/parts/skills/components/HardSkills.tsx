import React from "react";
import { AllIcons } from "../../../assets/icons/AllIcons";
const hardSkills = [
	"HTML",
	"CSS",
	"Java Script",
	"React",
	"Sass/scss",
	"Typescript",
	"Redux / Redux toolkit / RTK Query",
	"RESTful API",
	"Git",
	"npm",
	"Browser Developer Tools",
	"Responsive Design",
];

export const HardSkills = () => {
	return (
		<ul className="skills_hard">
			{hardSkills.map((skill, index) => (
				<li key={index} className={` skill appears-scale-skills-${index + 1}`}>
					{AllIcons[index]}
					{skill}
				</li>
			))}
		</ul>
	);
};
