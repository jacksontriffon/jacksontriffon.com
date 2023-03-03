import Image from "next/image";
import styles from "./tab.module.css";
// import portfolio from "../../assets/icons/Portfolio icon.svg";
// import contact from "../../assets/icons/Contact icon.svg";

export type TabDetails = {
	active: boolean;
	icon: string;
	tabName: string;
};

export default function Tab(TabDetails: TabDetails) {
	// const icons = {
	// 	portfolio: portfolio,
	// 	contact: contact,
	// };
	return (
		<div className={styles.activeTab}>
			<Image
				className={styles.icon}
				src={"../../assets/icons/" + icon + " icon.svg"}
				alt={icon + " icon"}
			></Image>
			<p>{tabName}</p>
		</div>
	);
}
