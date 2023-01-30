//libs
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { articlesActions } from "../../store/articlesSlice";
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
	let firstLoad = true;
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.articlesList);
	const dataToCards = () => {
		return articles.map((item) => (
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

		dispatch(articlesActions.addArticles(temp.articles));
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
					{articles.length && (
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
