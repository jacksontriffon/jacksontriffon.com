import Card, { CardDetails } from "@/components/card/card";
import Radio from "@/components/radio-buttons/radio-buttons";
import styles from "./page.module.scss";
import wizitLogo from "../../assets/logo/Wizit.svg";

export default function ProjectTransition() {
	const cardDetails: CardDetails = {
		cardLogo: { src: wizitLogo, alt: "Wizit Logo" },
		tagline: "Not your usual credit card",
		flipped: false,
	};

	const routeToProject = () => {
		cardDetails.flipped = true;
	};

	return (
		<div className={styles.pageContainer}>
			<p className={styles.preTitle}>Featuring</p>
			<div className={styles.cardContainer}>
				<div>
					<Card {...cardDetails} />
				</div>
			</div>
			<div className={styles.footer}>
				<Radio {...{ radioButtonsSelected: [true, false, false] }} />
			</div>
		</div>
	);
}
