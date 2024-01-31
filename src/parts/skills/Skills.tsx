import React, { useEffect, useRef, useState } from "react";
import { SoftSkills } from "./components/SoftSkills";
import { HardSkills } from "./components/HardSkills";
import "./skills.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
type state = "soft" | "hard";

export const Skills = () => {
	const [skillsState, setSkillsState] = useState<state>("hard");
	const namesRef = useRef(null);
	const blockRef = useRef(null);
	const titleRef = useRef(null);
	useEffect(() => {
		gsap.fromTo(
			titleRef.current,
			{ opacity: 0, y: "-10px" },
			{
				opacity: 1,
				y: "0px",
				scrollTrigger: {
					trigger: titleRef.current,
					scrub: 1,
					start: "top 95%",
					end: "bottom 95%",
				},
			}
		);
		gsap.fromTo(
			namesRef.current,
			{
				x: "-10px",
				opacity: 0,
			},
			{
				x: "0px",
				opacity: 1,
				scrollTrigger: {
					trigger: blockRef.current,
					scrub: 1,
					start: "top 70%",
					end: "top 65%",
				},
			}
		);
	}, []);
	return (
		<div ref={blockRef} className="skills">
			<div className="skills_title block-title">
				<span ref={titleRef}>Skills</span>
			</div>
			<div ref={namesRef} className="skills_names">
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
