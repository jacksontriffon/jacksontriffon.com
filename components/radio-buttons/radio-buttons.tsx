import styles from "./radio-buttons.module.scss";

type RadioDetails = {
	radioButtonsSelected: [boolean, ...boolean[]];
};

export default function Radio(details: RadioDetails) {
	return (
		<div className={styles.radioContainer}>
			{details.radioButtonsSelected.map((selected, index) => (
				<div key={index} className={styles.radio}>
					{selected ? <div className={styles.radioFill}></div> : null}
				</div>
			))}
		</div>
	);
}
