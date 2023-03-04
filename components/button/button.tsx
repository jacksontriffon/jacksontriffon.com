import ButtonUnstyled, { ButtonUnstyledProps } from "@mui/base/ButtonUnstyled";
import { ImageProps } from "next/image";
import styles from "./button.module.scss";

type ButtonDetails = {
	text: string;
	icon?: ImageProps;
	buttonProps?: ButtonUnstyledProps;
};

export default function Button(details: ButtonDetails) {
	return (
		<>
			<button className={styles.buttonContainer}>{details.text}</button>
		</>
	);
}
