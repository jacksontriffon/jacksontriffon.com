import styles from "./page.module.scss";
import Header from "@/components/jt-header/jt-header";
import Tabs from "@/components/tabs/tabs";
import Accordion, { AccordionDetails } from "@/components/accordian/accordian";
import typescriptIcon from "../assets/logo/TypeScript.svg";
import figmaIcon from "../assets/logo/Figma.svg";
import adobeIcon from "../assets/logo/Adobe AE.svg";
import lottieIcon from "../assets/logo/Lottie.svg";

export default function Home() {
	// To be fetched
	const skillsList: AccordionDetails[] = [
		{
			title: "Full-stack",
			description:
				"Experienced in building: Websites, Mobile apps, and browser-extensions",
			listDescription: "What I love building with:",
			listItems: [
				{
					imageDetails: {
						alt: "Typescript Logo",
						src: typescriptIcon,
					},
					title: "TypeScript",
				},
			],
		},
		{
			title: "UX Designer",
			description:
				"Component-based design makes collaborating with devs simple",
			listDescription: "What I love designing with:",
			listItems: [
				{
					imageDetails: {
						alt: "Figma Logo",
						src: figmaIcon,
					},
					title: "Figma",
				},
				{
					imageDetails: {
						alt: "Adobe AE Logo",
						src: adobeIcon,
					},
					title: "Adobe AE",
				},
			],
		},
		{
			title: "Animations",
			description: "From complex motion-graphics to simple fade-ins",
			listDescription: "What I love animating with:",
			listItems: [
				{
					imageDetails: {
						alt: "Lottie Logo",
						src: lottieIcon,
					},
					title: "Lottie",
				},
			],
		},
	];

	return (
		<main className={styles.main}>
			<Header></Header>
			<div>
				<a href="/contact">Jackson Triffon</a>
				<div>
					{skillsList.map((item, index) => (
						<Accordion key={index} {...item}></Accordion>
					))}
				</div>
			</div>
			<Tabs></Tabs>
		</main>
	);
}
