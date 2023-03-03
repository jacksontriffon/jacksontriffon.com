import styles from "./tabs.module.css";
import Tab from "./tab/tab";

export default function Tabs() {
	return (
		<footer className={styles.footer}>
			<Tab active={true} icon="Portfolio" tabName="Portfolio"></Tab>
		</footer>
	);
}
