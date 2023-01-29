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
//assets
import loadIcon from "../../assets/loadIcon";

const HomePage = () => {
	const [data, setData] = useState([]);
	const [totalResults, setTotalResults] = useState(0);
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
		setTotalResults(temp.totalResults);
		if (data.length === 0) setData(temp.articles);
		else setData(data.concat(temp.articles));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Topbar />
			<div className={styles.bodyContainer}>
				<div className={styles.cardsContainer}>{dataToCards()}</div>
				<div
					className={styles.loadMore}
					onClick={(e) => {
						console.log("click");
					}}
				>
					{totalResults > data.length && (
						<>
							{loadIcon()}
							Load more articles
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default HomePage;
