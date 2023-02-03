//libs
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { articlesActions } from "../../store/articlesSlice";
//components
import Topbar from "../../components/topbar";
import Card from "../../components/card";
//api
import { getSearch, getTopHeadlines } from "../../api/news";
//style
import styles from "./homepage.module.css";
//assets
import loadIcon from "../../assets/loadIcon";

const HomePage = () => {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.articlesList);
	const searchTerm = useSelector((state) => state.searchTerm);
	const page = useSelector((state) => state.page);
	const totalArticles = useSelector((state) => state.totalArticles);
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
		if (searchTerm.length === 0) {
			const temp = await getTopHeadlines(page);
			dispatch(articlesActions.addArticles(temp.articles));
			dispatch(articlesActions.initializeTotalArticles(temp.totalResults));
		} else {
			const _temp = await getSearch(searchTerm, "", page);
			dispatch(articlesActions.addArticles(_temp.articles));
			dispatch(articlesActions.initializeTotalArticles(_temp.totalResults));
		}
	};

	useEffect(() => {
		getData();
	}, [page]);

	useEffect(() => {
		dispatch(articlesActions.setFirstPage());
		getData();
	}, [searchTerm]);

	return (
		<>
			<Topbar />
			<div className={styles.bodyContainer}>
				articles on site:
				{articles.length}
				<div className={styles.cardsContainer}>{dataToCards()}</div>
				<div
					className={styles.loadMore}
					onClick={(e) => {
						dispatch(articlesActions.addPage(1));
					}}
				>
					{articles.length !== totalArticles && (
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
