//libs
import React from "react";
import { useDispatch, useSelector } from "react-redux";
//state
import { articlesActions } from "../../store/articlesSlice";
//style
import styles from "./dropdown.module.css";

const Dropdown = () => {
	const dispatch = useDispatch();
	const sortBy = useSelector((state) => state.articles.sort);
	const sortOpen = useSelector((state) => state.articles.sortOpen);
	const search = useSelector((state) => state.articles.searchTerm);
	if (search.length === 0) return null;

	return (
		<div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
			<div
				className={styles.title}
				onClick={() => {
					dispatch(articlesActions.toggleSortOpen(!sortOpen));
				}}
			>
				Sort
			</div>
			{sortOpen && (
				<div className={styles.options}>
					<div
						className={
							sortBy === "relevancy" ? styles.selectedItem : styles.item
						}
						onClick={() => {
							sortBy !== "relevancy" &&
								dispatch(articlesActions.sortRelevant());
						}}
					>
						Relevancy
					</div>
					<div
						className={
							sortBy === "popularity" ? styles.selectedItem : styles.item
						}
						onClick={() => {
							sortBy !== "popularity" &&
								dispatch(articlesActions.sortPopular());
						}}
					>
						Popularity
					</div>
					<div
						className={
							sortBy === "publishedAt" ? styles.selectedItem : styles.item
						}
						onClick={() => {
							sortBy !== "publishedAt" &&
								dispatch(articlesActions.sortPublishedAt());
						}}
					>
						Publish Date
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
