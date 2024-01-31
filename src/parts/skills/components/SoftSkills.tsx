import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type SoftSkillsType = { title: string; description?: string }[];
const softSkills: SoftSkillsType = [
	{
		title: "Communication:",
		description: "clear and effective communication in a team.",
	},
	{
		title: "Problem Solving:",
		description: "the ability to identify issues, analyze them, and find effective solutions.",
	},
	{
		title: "Attention to Detail",
	},
	{
		title: "Time Management",
	},
	{
		title: "Adaptability:",
		description: "quickly learn and integrate new tools, libraries, and frameworks.",
	},
	{
		title: "Collaboration:",
		description: "the ability to collaborate, share ideas, and accept feedback.",
	},
	{
		title: "Creativity",
	},
	{
		title: "Continuous Learning",
	},
	{
		title: "Critical Thinking:",
		description: "making informed decisions and improvements.",
	},
];

export const SoftSkills = () => {
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
		<table className="skills_soft" ref={skillsRef}>
			{softSkills.map((skill, index) => (
				<tbody key={index} className={`appears-scale-skills-${index + 1}`}>
					<tr key={index} className="skills_skill">
						<td className="skills_soft_title">{skill.title}</td>
						<td>{skill.description}</td>
					</tr>
				</tbody>
			))}
		</table>
	);
};
