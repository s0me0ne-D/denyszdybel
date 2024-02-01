import React, { useState } from "react";
import { isSafari } from "react-device-detect";

export const Letter = ({ letter, index }: { letter: string; index: number | string }) => {
	const [stopAnimation, setStopAnimation] = useState(false);
	return (
		<span className="letters" onAnimationEnd={() => setStopAnimation(true)}>
			<span
				className={`letters_background appears-scale-${index} ${
					stopAnimation && "stop-animation"
				} ${isSafari && "safari-shadow"}`}
			>
				{letter}
			</span>
			<span
				className={`letters_transform appears-scale-${index} ${stopAnimation && "stop-animation"}`}
			>
				{letter}
			</span>
		</span>
	);
};
