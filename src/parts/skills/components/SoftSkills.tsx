import React from "react";
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
	return (
		<table className="skills_soft">
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
