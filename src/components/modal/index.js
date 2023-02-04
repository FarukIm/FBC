//libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedArticleActions } from "../../store/selectedArticleSlice";
import styles from "./modal.module.css";

const Modal = () => {
	const dispatch = useDispatch();
	const article = useSelector((state) => state.selectedArticle.article);
	const show = useSelector((state) => state.selectedArticle.isOpen);

	if (!show) {
		return null;
	}
	return (
		<div
			className={styles.modal}
			onClick={() => {
				dispatch(selectedArticleActions.closeArticle());
			}}
		>
			<div className={styles.modalContent}>
				<div className={styles.modalHeader}>
					<div className={styles.title}>{article.title}</div>
					<div
						className={styles.closeModal}
						onClick={() => {
							dispatch(selectedArticleActions.closeArticle());
						}}
					>
						{" "}
						Close
					</div>
				</div>
				<div className={styles.modalBody}>
					<div className={styles.image}>{article.urlToImage}</div>
					<div className={styles.published}>{article.published}</div>
					<div className={styles.source}>{article.source.name}</div>
					<div className={styles.author}>{article.author}</div>
					<div className={styles.description}>{article.description}</div>
					<div className={styles.content}>{article.content}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
