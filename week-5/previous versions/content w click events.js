import { useState } from "react";

const Content = () => {
	const [name, setName] = useState("Jordan"); // Value in paranthesis is the default state
	const [count, setCount] = useState(0);

	const handleNameChange = () => {
		const names = ["Bob", "Kevin", "Dave"];
		const int = Math.floor(Math.random() * 3);
		setName(names[int]);
	};

	const handleClick = () => {
		setCount(count + 1);
		setCount(count + 1);
		console.log(count);
	};

	const handleClick2 = (name) => {
		console.log(count);
	};

	return (
		<main>
			<p onDoubleClick={handleClick}>Hello {name}!</p>

			{/* Operators are no put afer this function, or else it would be called immediately */}
			<button onClick={handleNameChange}>Change Name</button>
			<button onClick={handleClick}>Click Name</button>
			<button onClick={handleClick2}>Click Event</button>
		</main>
	);
};

export default Content;
