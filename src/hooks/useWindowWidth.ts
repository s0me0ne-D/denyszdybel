import { useState, useEffect } from "react";

export const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		function updateSize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return windowWidth;
};
