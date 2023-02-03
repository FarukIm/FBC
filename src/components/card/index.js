//libs
import React from "react";
import { useDispatch } from "react-redux";
import { selectedArticleActions } from "../../store/selectedArticleSlice";
//style
import styles from "./card.module.css";

const Card = ({ article }) => {
	const dispatch = useDispatch();
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imageContainer}>
				<img
					src={article.urlToImage}
					alt='No image available'
					className={styles.image}
				/>
			</div>
			<div className={styles.title}>{article.title}</div>
			<div className={styles.descriptionContainer}>
				{article.description}
				<span
					onClick={() => {
						dispatch(selectedArticleActions.setArticle(article));
						dispatch(selectedArticleActions.openArticle());
						console.log(article);
					}}
				>
					..read more
				</span>
			</div>
		</div>
	);
};

export default Card;
