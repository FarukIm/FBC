import React from "react";
import styles from "./topbar.module.css";

const searchBar = () => {
	return (
		<div>
			<input
				className={styles.searchBar}
				type='search'
				onChange={(e) => {
					console.log(e);
				}}
				placeholder='Search...'
			/>
		</div>
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
