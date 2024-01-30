import React from "react";
import "./footerLine.scss";
import { GitHubIcon } from "../../assets/icons/GitHubIcon";
import { LinkedInIcon } from "../../assets/icons/media/LinkedInIcon";
import { InstaIcon } from "../../assets/icons/media/InstaIcon";

export const FooterLine = () => {
	return (
		<div className="footer-line">
			<div className="footer-line_media">
				<a>
					<GitHubIcon />
				</a>
				<a>
					<LinkedInIcon />
				</a>
				<a>
					<InstaIcon />
				</a>
			</div>
			<span className="footer-line_copy">© Copyright 2024. Made by Denys Zdybel</span>
		</div>
	);
};
