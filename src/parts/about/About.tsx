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
					end: "bottom 95%",
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
					start: "top 95%",
					end: "bottom 85%",
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
					start: "top 92%",
					end: "bottom 82%",
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
						Passionate and detail-oriented React Frontend Developer. Dedicated to contributing
						creative solutions to projects and committed to continuous skill enhancement.
					</span>
					<span ref={p2Ref}>
						My goal is to combine creative thinking and desin with an analitical approach to solve
						problems at the intersection of business and technology.
					</span>
				</span>
			</div>
		</div>
	);
};
