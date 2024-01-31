import React from "react";
import "./footerLine.scss";
import { GitHubIcon } from "../../assets/icons/GitHubIcon";
import { LinkedInIcon } from "../../assets/icons/media/LinkedInIcon";
import { InstaIcon } from "../../assets/icons/media/InstaIcon";

export const FooterLine = () => {
	return (
		<div className="footer-line">
			<div className="footer-line_media">
				<a href="https://github.com/s0me0ne-D" target="_blank" rel="noreferrer">
					<GitHubIcon />
				</a>
				<a
					href="https://www.linkedin.com/in/%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-%D0%B7%D0%B4%D0%B8%D0%B1%D0%B5%D0%BB%D1%8C-92443ba5/"
					target="_blank"
					rel="noreferrer"
				>
					<LinkedInIcon />
				</a>
				<a href="https://www.instagram.com/denyszdybel/" target="_blank" rel="noreferrer">
					<InstaIcon />
				</a>
			</div>
			<span className="footer-line_copy">© Copyright 2024. Made by Denys Zdybel</span>
		</div>
	);
};
