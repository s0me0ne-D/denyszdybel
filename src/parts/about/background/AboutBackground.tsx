import React, { useLayoutEffect, useRef } from "react";
import "./aboutBackground.scss";
import gsap from "gsap";

export const AboutBackground = () => {
	const blockRef = useRef(null);
	const showRef = useRef(null);
	useLayoutEffect(() => {
		const timeline = gsap.timeline();
		timeline.fromTo(
			showRef.current,
			{ opacity: 0 },
			{
				opacity: 1,
				scrollTrigger: {
					trigger: blockRef.current,
					scrub: 0.1,
					start: "100% 100%",
					end: "top 40%",
				},
			}
		);
	}, []);
	return (
		<div ref={blockRef} className="about-background">
			<span>
				<span className="grey">&#x25CB;</span> user@macbook-air project % npm create vite <br />
			</span>
			&nbsp;&nbsp;Need to install the following packages: create-vite@5.1.0 <br />
			&nbsp;&nbsp;Ok to proceed? (y) y<br />
			<span ref={showRef}>
				&nbsp;&nbsp;<span className="green">✔</span> Project name: <span className="grey">…</span>{" "}
				vite-project <br />
				&nbsp;&nbsp;<span className="green">✔</span> Select a framework:{" "}
				<span className="grey">&#8250;</span> <span className="pale-blue">React</span> <br />
				&nbsp;&nbsp;<span className="pale-blue">?</span> Select a variant: &#8250;{" "}
				<span className="grey">- Use arrow-keys. Return to submit.</span>
				<br />
				&nbsp;&nbsp;<span className="pale-blue">&#8250;</span> &nbsp;
				<span className="blue underline">TypeScript</span> <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="blue">TypeScript + SWC</span> <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">JavaScript</span> <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">JavaScript + SWC</span>
			</span>
		</div>
	);
};
