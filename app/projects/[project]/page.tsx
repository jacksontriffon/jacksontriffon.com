import Logo, { LogoDetails } from "@/components/logo-item/logo";
import Image, { ImageProps } from "next/image";
import styles from "./page.module.scss";
import angularLogo from "../../../assets/logo/Angular.svg";
import wizitLogo from "../../../assets/logo/Wizit.svg";

type ProjectDetails = {
	logoDetails: ImageProps;
	tagline: string;
	projectDescription: string;
	responsibilities: [string, ...string[]];
	badges: string[];
	yearsWorked: string;
	techStack: LogoDetails[];
};

export default function Project() {
	// To be fetched
	const details: ProjectDetails = {
		logoDetails: { alt: "Wizit Logo", src: wizitLogo },
		tagline: "Not your usual credit card",
		projectDescription:
			"An all in one financial app with a quirky design aimed at millennials.",
		responsibilities: [
			"Create a library of reusable, responsive components for Android & IOS devices using Angular & Ionic",
			"Animate key parts of the experience using libraries such as: Anime.js, Lottie, Ionic and native CSS",
			"Work with designers to create animations and components that match the experience and maintain performance requirements",
			"Build and test components for both Android & IOS using Capacitor",
		],
		badges: ["Full-stack", "Animation"],
		yearsWorked: "2022",
		techStack: [
			{
				title: "Angular",
				imageDetails: { alt: "Angular Logo", src: angularLogo },
			},
		],
	};

	return (
		<div className={styles.projectContainer}>
			<div className={styles.leftColumn}>
				<Image {...details.logoDetails} alt={details.logoDetails.alt} />
				<h4 className={styles.tagline}>{details.tagline}</h4>
				<h4 className={styles.projectDescription}>
					{details.projectDescription}
				</h4>
				<h4 className={styles.responsilitiesTitle}>
					Responsibilities:
				</h4>
				<ul>
					{details.responsibilities.map((text, index) => (
						<li key={index}>{text}</li>
					))}
				</ul>
				<h4 className={styles.examplesTitle}>Examples:</h4>
				<div className={styles.examplesContainer}>
					{
						<div className={styles.example}>
							<h4 className={styles.exampleTitle}></h4>
							<div className={styles.videoContainer}></div>
							<h6 className={styles.exampleDescription}></h6>
						</div>
					}
				</div>
			</div>
			<div className={styles.rightColumn}>
				<h3>Tech Stack</h3>
				<div className={styles.techContainer}>
					{details.techStack.map((logo, index) => (
						<Logo key={index} {...logo} />
					))}
				</div>
			</div>
		</div>
	);
}
