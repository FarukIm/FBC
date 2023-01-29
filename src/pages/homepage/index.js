//libs
import React from "react";
import { useState, useEffect } from "react";
//components
import Topbar from "../../components/topbar";
import Card from "../../components/card";
//api
import { getTopHeadLines } from "../../api/news";
//style
import styles from "./homepage.module.css";

const HomePage = () => {
	const [data, setData] = useState([]);
	const dataToCards = () => {
		return data.map((item) => (
			<Card
				key={item.id}
				title={item.title}
				image={item.urlToImage}
				description={item.description}
			></Card>
		));
	};

	const getData = async () => {
		const temp = await getTopHeadLines();
		setData(temp);
	};

	useEffect(() => {
		getData();
		console.log(data);
	}, []);

	return (
		<>
			<Topbar />
			<div className={styles.bodyContainer}>
				<div className={styles.cardsContainer}>{dataToCards()}</div>
			</div>
		</>
	);
};

export default HomePage;
