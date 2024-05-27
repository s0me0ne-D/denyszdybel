import React, { useLayoutEffect, useRef } from 'react';
import './projects.scss';
import { FiseLogo } from '../../assets/logos/fiseLogo/FiseLogo';
import { FeasticoLogo } from '../../assets/logos/fescticoLogo/FeasticoLogo';
import { ToDoListLogo } from '../../assets/logos/toDoListLogo/ToDoListLogo';
import { Project } from './components/Project';
import FisePoster from '../../assets/posters/FisePoster.png';
import FeasticoPoster from '../../assets/posters/FeasticoPoster.png';
import ToDoListPoster from '../../assets/posters/ToDoListPoster.png';
import WeatherAppPoster from '../../assets/posters/WeatherAppPoster.png';
import gsap from 'gsap';
import { WeatherAppLogo } from '../../assets/logos/weatherAppLogo/WeatherAppLogo';

export type ProjectData = {
	title: string;
	design: 'Desktop only' | 'Responsive';
	description?: string;
	techStack: Array<string>;
	logo: any;
	links: { url: string; git: string };
};
type ProjectsData = Array<ProjectData>;

const projectsData: ProjectsData = [
	{
		title: 'Fise',
		design: 'Responsive',
		description:
			'FISE is a website about movies and TV series where you can find comprehensive information about various films and shows, as well as explore the latest global releases. In creating the site, Lazy Load was utilized for quick loading, and Debounce Search was implemented to reduce server requests.',
		techStack: ['React', 'JavaScript', 'RTK Query', 'SCSS', 'Git', 'Swiper'],
		logo: <FiseLogo />,
		links: {
			url: 'https://s0me0ne-d.github.io/FISE/',
			git: 'https://github.com/s0me0ne-D/FISE',
		},
	},
	{
		title: 'Feactico',
		design: 'Responsive',
		description:
			'Feastico is a recipe website where you can find recipes from around the world. Convenient logging stores your data in local storage, while the use of debounce for search minimizes server requests. Queries are processed through RTK query, ensuring efficient server communication. Add recipe ingredients to your ToDoList and explore culinary delights from across the globe on Feastico!',
		techStack: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'SCSS', 'Git', 'JavaScript'],
		logo: <FeasticoLogo />,
		links: {
			url: 'https://s0me0ne-d.github.io/Feastico/',
			git: 'https://github.com/s0me0ne-D/Feastico',
		},
	},
	{
		title: 'ToDoList',
		design: 'Responsive',
		techStack: ['React', 'TypeScript', 'Redux Toolkit', 'JavaScript', 'SCSS', 'Git'],
		logo: <ToDoListLogo />,
		links: {
			git: 'https://github.com/s0me0ne-D/to_do_list',
			url: 'https://s0me0ne-d.github.io/to_do_list/',
		},
	},
	{
		title: 'WeatherApp',
		design: 'Responsive',
		techStack: [
			'React',
			'TypeScript',
			'SCSS',
			'Redux Toolkit',
			'RTK Query',
			'Swiper',
			'Leaflet',
			'MUI',
			'Lottie',
		],
		logo: <WeatherAppLogo />,
		links: {
			git: 'https://github.com/s0me0ne-D/weather_app',
			url: 'https://s0me0ne-d.github.io/weather_app/',
		},
	},
];

export const Projects = () => {
	const blockRef = useRef(null);
	const fisePosterRef = useRef(null);
	const feasticoRef = useRef(null);
	const toDoListRef = useRef(null);
	const titleRef = useRef(null);

	const posters = [FisePoster, FeasticoPoster, ToDoListPoster, WeatherAppPoster];
	useLayoutEffect(() => {
		gsap.fromTo(
			titleRef.current,
			{ opacity: 0, y: '-10px' },
			{
				opacity: 1,
				y: '0px',
				scrollTrigger: {
					trigger: titleRef.current,
					scrub: 1,
					start: 'top 95%',
					end: 'bottom 95%',
				},
			}
		);
		gsap.fromTo(
			fisePosterRef.current,
			{ clipPath: 'inset(0px 0px 0px 0px)' },
			{
				clipPath: 'inset(0px 0px 100% 0px)',
				scrollTrigger: {
					trigger: blockRef.current,
					scrub: 1,
					start: 'top 25%',
					end: '50% 75%',
				},
			}
		);
		gsap.fromTo(
			feasticoRef.current,
			{ clipPath: 'inset(0px 0px 0px 0px)' },
			{
				clipPath: 'inset(0px 0px 100% 0px)',
				scrollTrigger: {
					trigger: blockRef.current,
					scrub: 1,
					start: '25% 25%',
					end: '75% 75%',
				},
			}
		);
		gsap.fromTo(
			toDoListRef.current,
			{ clipPath: 'inset(0px 0px 0px 0px)' },
			{
				clipPath: 'inset(0px 0px 100% 0px)',
				scrollTrigger: {
					trigger: blockRef.current,
					scrub: 1,
					start: '50% 25%',
					end: '100% 75%',
				},
			}
		);
	}, []);

	return (
		<div className='projects'>
			<div className='projects_title block-title grid-columns'>
				<span ref={titleRef}>Projects</span>
			</div>
			<div ref={blockRef} className='projects_block'>
				<div className='projects_block_info'>
					{projectsData.map((project, index) => (
						<Project key={project.title} project={project} poster={posters[index]} />
					))}
				</div>
				<div className='posters'>
					<div className='posters_container'>
						<div ref={fisePosterRef} className='posters_container_item' style={{ zIndex: 4 }}>
							<img src={FisePoster} alt='Fise poster' />
						</div>
						<div ref={feasticoRef} className='posters_container_item' style={{ zIndex: 3 }}>
							<img src={FeasticoPoster} alt='Feastico poster' />
						</div>
						<div ref={toDoListRef} className='posters_container_item' style={{ zIndex: 2 }}>
							<img src={ToDoListPoster} alt='ToDoList poster' />
						</div>
						<div className='posters_container_item' style={{ zIndex: 1 }}>
							<img src={WeatherAppPoster} alt='WeatherApp poster' />
						</div>
						<div className='shadow'></div>
					</div>
				</div>
			</div>
		</div>
	);
};
