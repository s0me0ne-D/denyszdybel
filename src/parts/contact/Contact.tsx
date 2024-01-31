import React, { useEffect, useRef } from "react";
import "./contact.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
	const contactRef = useRef(null);
	const btnRef = useRef(null);
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: contactRef.current,
				scrub: 1,
				start: "bottom 100%",
				end: " bottom 100%",
			},
		});
		tl.fromTo(
			contactRef.current,
			{
				x: "-100%",
				opacity: 0,
			},
			{
				x: "0",
				opacity: 1,
			}
		).fromTo(
			btnRef.current,
			{
				x: "100%",
				opacity: 0,
			},
			{
				x: "0px",
				opacity: 1,
			}
		);
	}, []);
	return (
		<div className="contact">
			<span ref={contactRef} className="contact_text">
				Got a question or proposal, or just want to say hello? <span>Go ahead.</span>
			</span>
			<a ref={btnRef} href={"mailto:zdybeldenys@gmail.com?subject=👋 Hello!"}>
				CONTACT ME
			</a>
		</div>
	);
};
