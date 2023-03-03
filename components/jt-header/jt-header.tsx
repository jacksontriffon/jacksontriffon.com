import Image from "next/image";
import logo from "public/JT Logo.svg";
import styles from "./jt-header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Image
					className={styles.logo}
					src={logo}
					alt={"JT Logo"}
				></Image>
			</div>
			<div className={styles.currentPage}>
				<p className={styles.pageTitle}>Home</p>
			</div>
		</header>
	);
}
