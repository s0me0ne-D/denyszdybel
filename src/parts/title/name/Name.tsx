import React from "react";
import "./name.scss";

export const Name = () => {
	return (
		<div className="name">
			<span>
				<span className="name_first">
					<span className="letters">
						<span className="letters_background">D</span>
						<span className="letters_transform">D</span>
					</span>
					<span className="letters">
						<span className="letters_background">E</span>
						<span className="letters_transform">E</span>
					</span>
					<span className="letters">
						<span className="letters_background">N</span>
						<span className="letters_transform">N</span>
					</span>
					<span className="letters">
						<span className="letters_background">Y</span>
						<span className="letters_transform">Y</span>
					</span>
					<span className="letters">
						<span className="letters_background">S</span>
						<span className="letters_transform">S</span>
					</span>
				</span>{" "}
				<span className="name_last">
					<span className="letters">
						<span className="letters_background">Z</span>
						<span className="letters_transform">Z</span>
					</span>
					<span className="letters">
						<span className="letters_background">D</span>
						<span className="letters_transform">D</span>
					</span>
					<span className="letters">
						<span className="letters_background reverse">Y</span>
						<span className="letters_transform reverse">Y</span>
					</span>
					<span className="letters">
						<span className="letters_background">B</span>
						<span className="letters_transform">B</span>
					</span>
					<span className="letters">
						<span className="letters_background">E</span>
						<span className="letters_transform">E</span>
					</span>
					<span className="letters">
						<span className="letters_background">L</span>
						<span className="letters_transform">L</span>
					</span>
				</span>
			</span>
		</div>
	);
};
