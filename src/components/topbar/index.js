//libs
import React from "react";
import { useDispatch } from "react-redux";
import { articlesActions } from "../../store/articlesSlice";
//components
import Dropdown from "../dropdown";
//styles
import styles from "./topbar.module.css";
//assets
import searchIcon from "../../assets/searchIcon";

const Topbar = () => {
	const dispatch = useDispatch();
	let tempSearch = "";
	const searchBar = () => {
		return (
			<form
				className={styles.formContainer}
				onSubmit={(event) => {
					event.preventDefault();
					event.target.reset();
				}}
			>
				<input
					className={styles.searchBar}
					type='search'
					placeholder='Search...'
					onChange={(event) => {
						tempSearch = event.target.value;
					}}
				/>
				<button
					className={styles.searchSubmit}
					type='submit'
					onClick={(event) => {
						dispatch(articlesActions.setFirstPage());
						dispatch(articlesActions.addSearchTerm(tempSearch));
					}}
				>
					{searchIcon()}
				</button>
			</form>
		);
	};

	return (
		<div className={styles.topbarContainer}>
			<div className={styles.topbarItemsContainer}>
				<div className={styles.left}>
					<div
						className={styles.logoContainer}
						onClick={() => {
							window.scrollTo(0, 0);
							dispatch(articlesActions.setFirstPage());
							dispatch(articlesActions.removeSearch());
							dispatch(articlesActions.sortPublishedAt());
						}}
					>
						<span className={styles.letter}>F</span>
						<span className={styles.letter}>B</span>
						<span className={styles.letter}>C</span>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.searchBarContainer}>
						<div className={styles.sortContainer}>
							<Dropdown />
						</div>
						{searchBar()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
