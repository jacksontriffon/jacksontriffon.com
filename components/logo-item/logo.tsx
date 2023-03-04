import styles from "./logo.module.scss";
import Image, { ImageProps } from "next/image";

export type LogoDetails = {
	imageDetails: ImageProps;
	title: string;
};

export default function Logo(details: LogoDetails) {
	return (
		<div className={styles.item}>
			<Image
				{...details.imageDetails}
				alt={details.imageDetails.alt}
			></Image>
			<p>{details.title}</p>
		</div>
	);
}
