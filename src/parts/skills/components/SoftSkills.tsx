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
		description: "the ability to identify problems, analyze them, and find effective solutions.",
	},
	{
		title: "Adaptability:",
		description: "quickly learn and integrate new tools, libraries, and frameworks.",
	},
	{
		title: "Continuous Learning:",
		description: "actively engaged in continuous skill development.",
	},
	{
		title: "Critical Thinking:",
		description: "making informed decisions and improvements.",
	},

	{
		title: "Attention to Detail:",
		description: "meticulous, ensuring high-quality work by paying attention to details.",
	},
	{
		title: "Time Management:",
		description: "efficiently plan and prioritize tasks for timely results.",
	},
	{
		title: "Collaboration:",
		description: "the ability to collaborate, share ideas, and accept feedback.",
	},
	{
		title: "Creativity:",
		description: "apply creative thinking to generate original solutions.",
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
