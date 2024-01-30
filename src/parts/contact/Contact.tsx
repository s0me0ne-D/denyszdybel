import React, { useState } from "react";
import "./contact.scss";

export const Contact = () => {
	return (
		<div className="contact">
			<span className="contact_text">
				Got a question or proposal, or just want to say hello? <span>Go ahead.</span>
			</span>
			<a href={"mailto:zdybeldenys@gmail.com?subject=👋 Hello!"}>CONTACT ME</a>
		</div>
	);
};
