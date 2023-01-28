//libs
import React from "react";
//components
import Topbar from "../../components/topbar";
import Card from "../../components/card";
//style
import styles from "./homepage.module.css";

const HomePage = () => {
	const lorem =
		"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";
	return (
		<>
			<Topbar />
			<div className={styles.bodyContainer}>
				<div className={styles.cardsContainer}>
					<Card title='test' image='image' description={lorem} />
					<Card title='test' image='image' description={lorem} />
					<Card title='test' image='image' description={lorem} />
					<Card title='test' image='image' description={lorem} />
					<Card title='test' image='image' description={lorem} />
					<Card title='test' image='image' description={lorem} />
					<Card title='test' image='image' description={lorem} />
				</div>
			</div>
		</>
	);
};

export default HomePage;
