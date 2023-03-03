import styles from "./tabs.module.css";
import portfolio from "../../assets/icons/Portfolio icon.svg";
import contact from "../../assets/icons/Contact icon.svg";
import Image from "next/image";

export default function Tabs() {
	return (
		<footer className={styles.footer}>
			<div className={styles.activeTab}>
				<Image
					className={styles.icon}
					src={portfolio}
					alt={"Portfolio icon"}
					width={48}
					height={48}
				></Image>
				<p>Portfolio</p>
			</div>
			<div className={styles.defaultTab}>
				<Image
					className={styles.icon}
					src={contact}
					alt={"Contact icon"}
					width={48}
					height={48}
				></Image>
				<p>Portfolio</p>
			</div>
		</footer>
	);
}
