import styles from "./badge.module.scss";

type BadgeDetails = {
	text: string;
};

export default function Badge({ text }: BadgeDetails) {
	return <div className={styles.badge}>{text}</div>;
}
