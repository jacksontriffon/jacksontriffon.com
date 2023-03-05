import { ImageProps } from "next/image";
import { MouseEventHandler } from "react";
import styles from "./button.module.scss";

type ButtonDetails = {
	text: string;
	icon?: ImageProps;
	clickEvent?: MouseEventHandler;
};

export default function Button(details: ButtonDetails): React.ReactElement {
	return (
		<button onClick={details.clickEvent} className={styles.buttonContainer}>
			{details.text}
		</button>
	);
}
