import React, { useEffect, useState } from "react";
import { ProjectData } from "../Projects";
import { DesignIcon } from "../../../assets/icons/DesignIcon";
import "./project.scss";
import { GitHubIcon } from "../../../assets/icons/GitHubIcon";
import { WebLinkIcon } from "../../../assets/icons/WebLinkIcon";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
export const Project = ({ project, poster }: { project: ProjectData; poster: string }) => {
	const [showPoster, setShowPoster] = useState<boolean>(false);
	const windowWidth = useWindowWidth();
	useEffect(() => {
		setShowPoster(windowWidth < 850 ? true : false);
	}, [windowWidth]);
	return (
		<div className="project">
			<div className="project_logo">{project.logo}</div>
			<div className="project_description">
				<div className="project_description_design">
					<DesignIcon /> {project.design}
				</div>
				{showPoster && <img src={poster} alt="project poster" className="max-width-poster" />}
				<div className="project_description_about">{project.description}</div>
				<ul className="project_description_tech-stack">
					{project.techStack.map((el) => (
						<li key={el} className="skill">
							{el}
						</li>
					))}
				</ul>
				<div className="project_description_links">
					<div className="project_description_links_link">
						<GitHubIcon />
						<a href={project.links.git} target="_blank" rel="noreferrer">
							GitHub
						</a>
					</div>
					<div className="project_description_links_link">
						<WebLinkIcon />
						<a href={project.links.url} target="_blank" rel="noreferrer">
							Demo
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
