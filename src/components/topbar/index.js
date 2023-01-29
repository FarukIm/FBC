//libs
import React from "react";
//styles
import styles from "./topbar.module.css";
//assets
import searchIcon from "../../assets/searchIcon";

const searchBar = () => {
	return (
		<form className={styles.formContainer}>
			<input
				className={styles.searchBar}
				type='search'
				on
				placeholder='Search...'
			/>
			<button className={styles.searchSubmit} type='submit'>
				{searchIcon()}
			</button>
		</form>
	);
};

const Topbar = () => {
	return (
		<div className={styles.topbarContainer}>
			<div className={styles.topbarItemsContainer}>
				<div className={styles.left}>
					<div className={styles.logoContainer}>
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

export default Topbar;
