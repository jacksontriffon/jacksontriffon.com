import Image from "next/image";
import periodicTable from "../../assets/images/Blocky periodic table.svg";
import styles from "./periodic-table.module.scss";

export default function PeriodicTable() {
	return (
		<div className={styles.blockyPeriodicTableContainer}>
			<Image
				className={styles.blockyPeriodicTable}
				src={periodicTable}
				alt="Periodic table"
			/>
		</div>
	);
}
