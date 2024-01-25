import { useEffect, useState } from "react";

export const useSkrollPercentage = () => {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			// Calculate the scroll percentage
			const newScrollPercentage =
				(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
			setScrollPercentage(newScrollPercentage);
		};

		// Attach the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Empty dependency array means this effect runs once after initial render
	return scrollPercentage;
};
