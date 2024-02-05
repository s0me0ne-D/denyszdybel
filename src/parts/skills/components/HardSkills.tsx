import React, { useEffect, useRef } from "react";
import { AllIcons } from "../../../assets/icons/AllIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const hardSkills = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Sass/scss",
	"TypeScript",
	"Redux / Redux toolkit / RTK Query",
	"RESTful API",
	"Git",
	"npm",
	"Browser Developer Tools",
	"Responsive Design",
];

export const HardSkills = () => {
	const skillsRef = useRef(null);
	useEffect(() => {
		gsap.fromTo(
			skillsRef.current,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				scrollTrigger: {
					trigger: skillsRef.current,
					start: "top 90%",
					end: "top 85%",
					scrub: 1,
				},
			}
		);
	}, []);
	return (
		<ul ref={skillsRef} className="skills_hard">
			{hardSkills.map((skill, index) => (
				<li key={index} className={`skill appears-scale-skills-${index + 1}`}>
					{AllIcons[index]}
					{skill}
				</li>
			))}
		</ul>
	);
};
