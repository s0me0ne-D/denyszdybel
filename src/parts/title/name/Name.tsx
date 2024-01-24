import React from "react";
import "./name.scss";
import { Letter } from "./Letter";

export const Name = () => {
	const firstName = ["D", "E", "N", "Y", "S"];
	const lastName = ["Z", "D", "Y", "B", "E", "L"];

	return (
		<div className="name">
			<span>
				<span className="name_first">
					{firstName.map((letter, index) => (
						<Letter key={index} letter={letter} index={index + 1} />
					))}
				</span>{" "}
				<span className="name_last">
					{lastName.map((letter, index) => (
						<Letter
							key={index}
							letter={letter}
							index={
								index !== 2
									? index + firstName.length + 1
									: `${index + firstName.length + 1} reverse`
							}
						/>
					))}
				</span>
			</span>
		</div>
	);
};
