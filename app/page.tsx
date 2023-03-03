import styles from "./page.module.css";
import Header from "../components/jt-header/jt-header";
import Tabs from "../components/tabs/tabs";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header></Header>
			<Tabs></Tabs>
		</main>
	);
}
