import React, { useState } from "react";
import "./skills.scss";
import { HardSkills } from "./components/HardSkills";
import { SoftSkills } from "./components/SoftSkills";
type state = "soft" | "hard";

export const Skills = () => {
	const [skillsState, setSkillsState] = useState<state>("hard");
	return (
		<div className="skills">
			<div className="skills_title">
				<span>Skills</span>
			</div>
			<div className="skills_names">
				<div className={`skills_btn  ${skillsState === "hard" && "active"}`}>
					<button onClick={() => setSkillsState("hard")}>HARD</button>
				</div>
				<div className={`skills_btn  ${skillsState === "soft" && "active"}`}>
					<button onClick={() => setSkillsState("soft")}>SOFT</button>
				</div>
			</div>

			{skillsState === "hard" ? <HardSkills /> : <SoftSkills />}
		</div>
	);
};
