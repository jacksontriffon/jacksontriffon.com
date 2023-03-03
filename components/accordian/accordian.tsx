import styles from "./accordian.module.css";
import Image, { ImageProps } from "next/image";

export type AccordianDetails = {
	title: string;
	description: string;
	listDescription: string;
	listItems: [AccordianItemDetails];
};

export type AccordianItemDetails = {
	imageDetails: ImageProps;
	title: string;
};

export default function Accordian(details: AccordianDetails) {
	return (
		<div className={styles.accordianContainer}>
			<div className={styles.leftColumn}>
				<div className={styles.block}></div>
				<div className={styles.thread}></div>
			</div>
			<div className={styles.rightColumn}>
				<h1 className={styles.title}>{details.title}</h1>
				<p className={styles.description}>{details.description}</p>
				<span className={styles.listDescription}>
					{details.listDescription}
				</span>
				<div className={styles.listContainer}>
					<div className={styles.item}>
						<Image
							{...details.listItems[0].imageDetails}
							alt={details.listItems[0].title + " Logo"}
						></Image>
						<p>{details.listItems[0].title}</p>
					</div>
					{/* {details.listItems.length > 1 ? (
						<div className={styles.item}>
							<Image
								{...details.listItems[1].imageDetails}
								alt={details.listItems[1].title + " Logo"}
							></Image>
							<p>{details.listItems[1].title}</p>
						</div>
					) : null}
					{details.listItems.length > 2 ? (
						<div className={styles.item}>
							<Image
								{...details.listItems[2].imageDetails}
								alt={details.listItems[2].title + " Logo"}
							></Image>
							<p>{details.listItems[2].title}</p>
						</div>
					) : null} */}
				</div>
			</div>
		</div>
	);
}
