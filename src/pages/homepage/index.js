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
	const lorem =
		"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";
	const dataToCards = () => {
		data.map((item) => (
			<Card
				key={data.id}
				title={data.title}
				image={data.urlToImage}
				description={data.description}
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
				<div className={styles.cardsContainer}>
					{data.map((item) => (
						<Card
							key={item.id}
							title={item.title}
							image={item.urlToImage}
							description={item.description}
						></Card>
					))}
				</div>
			</div>
		</>
	);
};

export default HomePage;
