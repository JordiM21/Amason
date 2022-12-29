import Head from "next/head";
import React from "react";

const Header = () => {
	return (
		<Head>
			<title>Amason</title>
			<meta name="description" content="Amason E-commerce" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href="/public/logo.png" />
		</Head>
	);
};

export default Header;
