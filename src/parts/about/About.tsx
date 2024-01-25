import React, { useLayoutEffect, useRef } from "react";
import "./about.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
	const refTitle = useRef(null);
	const refFirstCol = useRef(null);
	const refSecondCol = useRef(null);
	const blockRef = useRef(null);

	useLayoutEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: refTitle.current,
				scrub: 1,
				start: "top 90%",
				end: "bottom 30%",
			},
		});
		tl.fromTo(
			refTitle.current,
			{ opacity: 0 },
			{
				opacity: 1,
				top: "20%",
			}
		);
		gsap.fromTo(
			refFirstCol.current,
			{ opacity: 0 },
			{
				opacity: 1,
				y: "-=20px",
				scrollTrigger: {
					trigger: refFirstCol.current,
					start: "top 90%",
					end: "bottom 85%",
					scrub: 1,
				},
			}
		);
		gsap.fromTo(
			refSecondCol.current,
			{ opacity: 0 },
			{
				opacity: 1,
				y: "-=20px",
				scrollTrigger: {
					trigger: refSecondCol.current,
					start: "top 90%",
					end: "bottom 85%",
					scrub: 1,
				},
			}
		);

		return () => ScrollTrigger.refresh();
	}, []);
	return (
		<div className="about" ref={blockRef}>
			<div className="about_title" ref={refTitle}>
				&lt;
				<span>AboutMe</span>
				/&gt;
			</div>
			<div className="about_text">
				<p className={`about_text_first-column`}>
					<span ref={refFirstCol}>
						My goal is to combine creative thinking and desin with an analitical approach to solve
						problems at the intersection of business and technology.{" "}
					</span>
				</p>
				<br />
				<p className={`about_text_second-column`}>
					<span ref={refSecondCol}>
						Passionate and detail-oriented React Frontend Developer. Dedicated to contributing
						creative solutions to projects and committed to continuous skill enhancement.
					</span>
				</p>
			</div>
		</div>
	);
};
