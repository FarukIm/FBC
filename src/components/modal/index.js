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
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button
					className={styles.closeModal}
					onClick={() => {
						dispatch(selectedArticleActions.closeArticle());
					}}
				>
					X
				</button>

				<h1 className={styles.title}>{article.title}</h1>

				<div className={styles.modalBody}>
					<div className={styles.image}>
						<img
							src={article.urlToImage}
							height='100%'
							width='100%'
							alt='No image available'
						/>
					</div>

					<h3 className={styles.description}>
						{article.description !== null
							? article.description
							: "No article description"}
					</h3>

					<div className={styles.metaData}>
						<div>
							Published on: {article.publishedAt.replace("T", " ").slice(0, -1)}
						</div>
						<div>Source: {article.source.name}</div>
						<div>
							Author:{" "}
							{article.author !== null ? article.author : "No author specified"}
						</div>
					</div>

					<div className={styles.content}>
						{article.content !== null ? article.content : "No article content"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
