//libs
import React from "react";
import { useDispatch, connect } from "react-redux";
import { articlesActions } from "../../store/articlesSlice";
//styles
import styles from "./topbar.module.css";
//assets
import searchIcon from "../../assets/searchIcon";

const Topbar = () => {
	const dispatch = useDispatch();
	let tempSearch = "";
	const searchBar = () => {
		return (
			<form className={styles.formContainer}>
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
						event.preventDefault();
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
							dispatch(articlesActions.setFirstPage());
							dispatch(articlesActions.removeSearch());
						}}
					>
						<span className={styles.letter}>F</span>
						<span className={styles.letter}>B</span>
						<span className={styles.letter}>C</span>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.searchBarContainer}>
						<div className={styles.sortContainer}>Sort</div>
						{searchBar()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect()(Topbar);
