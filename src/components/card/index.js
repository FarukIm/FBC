//libs
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedArticleActions } from "../../store/selectedArticleSlice";
//style
import styles from "./card.module.css";

const Card = ({ article }) => {
	const dispatch = useDispatch();
	const blah = useSelector((state) => state.selectedArticle.article);
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imageContainer}>
				<img src={article.urlToImage} className={styles.image} alt='FBC' />
			</div>
			<div className={styles.title}>{article.title}</div>
			<div className={styles.descriptionContainer}>
				{article.description}
				<span
					onClick={() => {
						dispatch(selectedArticleActions.setArticle(article));
						dispatch(selectedArticleActions.openArticle());
					}}
				>
					..read more
				</span>
			</div>
		</div>
	);
};

export default Card;
