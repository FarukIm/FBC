//libs
import React from "react";
//style
import styles from "./card.module.css";

const Card = ({ key, title, image, description }) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imageContainer}>
				<img src={image} alt='No image available' className={styles.image} />
			</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.descriptionContainer}>
				{description}
				<a href='/'>..read more</a>
			</div>
		</div>
	);
};

export default Card;
