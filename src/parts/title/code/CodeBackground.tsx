import React from "react";
import "./codeBackground.scss";

export const CodeBackground = () => {
	return (
		<pre className="code-background">
			&lt;<span className="blue">!DOCTYPE</span>
			<span className="pale-blue"> html</span>&gt; <br />
			&lt;<span className="blue">html</span> <span className="pale-blue">lang</span>
			<span className="white">=</span>
			<span className="orange">"en"</span>&gt; <br />
			&nbsp;&nbsp;&lt;<span className="blue">head</span>&gt; <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="blue">meta</span>{" "}
			<span className="pale-blue">charset</span>
			<span className="white">=</span>
			<span className="orange">"UTF-8"</span>
			/&gt; <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="blue">meta</span>{" "}
			<span className="pale-blue">
				name
				<span className="white">=</span>
				<span className="orange">"viewport"</span> content <span className="white">=</span>
				<span className="orange">"width=device-width, initial-scale=1.0"</span>
			</span>
			/&gt; <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="blue">title</span>&gt;
			<span className="white">Document</span>&lt;/<span className="blue">title</span>&gt; <br />
			&nbsp;&nbsp;&lt;/<span className="blue">head</span>&gt; <br />
			&nbsp;&nbsp;&lt;<span className="blue">body</span>&gt; <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="blue">h1</span>&gt;
			<span className="white">Hello World!</span>&lt;/
			<span className="blue">h1</span>&gt; <br />
			&nbsp;&nbsp;&lt;/<span className="blue">body</span>&gt; <br />
			&lt;/<span className="blue">html</span>&gt;
		</pre>
	);
};
