//libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//state
import { articlesActions } from "../../store/articlesSlice";
//components
import Topbar from "../../components/topbar";
import Card from "../../components/card";
import Modal from "../../components/modal";
//api
import { getSearch, getTopHeadlines } from "../../api/news";
import { response } from "../../api/dummydata/results";
//style
import styles from "./homepage.module.css";
//assets
import loadIcon from "../../assets/loadIcon";

const HomePage = () => {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.articles.articlesList);
	const searchTerm = useSelector((state) => state.articles.searchTerm);
	const page = useSelector((state) => state.articles.page);
	const totalArticles = useSelector((state) => state.articles.totalArticles);
	const sort = useSelector((state) => state.articles.sort);
	const sortOpen = useSelector((state) => state.articles.sortOpen);

	const dataToCards = () => {
		//return response.articles.map((item) => <Card article={item}></Card>);
		return articles.map((item) => <Card article={item}></Card>);
	};

	const getData = async () => {
		if (searchTerm.length === 0) {
			const temp = await getTopHeadlines(page);
			dispatch(articlesActions.addArticles(temp.articles));
			dispatch(articlesActions.initializeTotalArticles(temp.totalResults));
		} else {
			const _temp = await getSearch(searchTerm, sort, page);
			dispatch(articlesActions.addArticles(_temp.articles));
			dispatch(articlesActions.initializeTotalArticles(_temp.totalResults));
		}
	};

	useEffect(() => {
		getData();
	}, [page]);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(articlesActions.setFirstPage());
		getData();
	}, [searchTerm, sort]);

	return (
		<div
			onClick={() => {
				sortOpen && dispatch(articlesActions.toggleSortOpen(false));
			}}
		>
			<Topbar />
			<Modal />
			<div className={styles.bodyContainer}>
				<div className={styles.introText}>
					{" "}
					Welcome to the FBC! The Faruk Broadcast Channel
				</div>
				<div className={styles.cardsContainer}>{dataToCards()}</div>
				{articles.length < totalArticles && (
					<div
						className={styles.loadMore}
						onClick={(e) => {
							dispatch(articlesActions.addPage(1));
						}}
					>
						<>
							{loadIcon()}
							Load more articles
						</>
					</div>
				)}
			</div>
		</div>
	);
};

export default HomePage;
