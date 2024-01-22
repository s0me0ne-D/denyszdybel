import { useState, useEffect } from "react";
export const useScroll = () => {
	const [scrollPixels, setScrollPixels] = useState(0);

	useEffect(() => {
		const handleScroll = (event: WheelEvent) => {
			const scrollPosition = Math.round(event.deltaY * 0.5);
			setScrollPixels((prev) => prev + scrollPosition);
		};

		window.addEventListener("wheel", handleScroll);

		return () => {
			window.removeEventListener("wheel", handleScroll);
		};
	}, []);
	useEffect(() => {
		scrollPixels < 0 && setScrollPixels(0);
	}, [scrollPixels]);

	return scrollPixels;
};
