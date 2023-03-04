import Radio from "@/components/radio-buttons/radio-buttons";
import styles from "./page.module.scss";

export default function ProjectTransition() {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.footer}>
				<Radio {...{ radioButtonsSelected: [true, false, false] }} />
			</div>
		</div>
	);
}
