import React from "react";

const Header = ({ title }) => {
	// *** Example of inline CSS style
	// const headerStyle = {
	// 	backgroundColor: "royalblue",
	// 	color: "#fff",
	// };

	return (
		// <header style={headerStyle}>
		<header>
			<h1>{title}</h1>
		</header>
	);
};

export default Header;
