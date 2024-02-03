import React, { useLayoutEffect, useRef } from "react";
import "./about.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutBackground } from "./background/AboutBackground";
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
	const titleRef = useRef(null);
	const p1Ref = useRef(null);
	const p2Ref = useRef(null);
	useLayoutEffect(() => {
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
					end: "top 90%",
				},
			}
		);

		gsap.fromTo(
			p1Ref.current,
			{
				opacity: 0,
				y: "-10px",
			},
			{
				opacity: 1,
				y: "0px",
				scrollTrigger: {
					trigger: p1Ref.current,
					scrub: 1,
					start: "bottom 95%",
					end: "bottom 90%",
				},
			}
		);
		gsap.fromTo(
			p2Ref.current,
			{ opacity: 0, y: "-10px" },
			{
				opacity: 1,
				y: "0px",
				scrollTrigger: {
					trigger: p2Ref.current,
					scrub: 1,
					start: "bottom 95%",
					end: "bottom 90%",
				},
			}
		);
	}, []);
	return (
		<div className="about">
			<div className=" about_background">
				<AboutBackground />
			</div>

			<div className="about_block">
				<span ref={titleRef} className="about_title ">
					About Me
				</span>
				<span className="about_text">
					<span ref={p1Ref}>
						Hello! I'm Denys, a passionate React Front-End Developer based in Wrocław,
						Poland.Dedicated to contributing creative solutions to projects and committed to
						continuous skill enhancement. With a keen eye for design and a love for creating
						seamless user experiences, I bring websites to life with clean code and a touch of
						creativity.
					</span>
					<span ref={p2Ref}>
						Explore my portfolio and discover the projects that showcase my dedication to crafting
						visually appealing and functional web solutions. Let's turn ideas into interactive
						realities!
					</span>
				</span>
			</div>
		</div>
	);
};
