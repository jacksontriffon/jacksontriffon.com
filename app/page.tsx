import styles from "./page.module.scss";
import Header from "@/components/jt-header/jt-header";
import Tabs from "@/components/tabs/tabs";
import Accordion, { AccordionDetails } from "@/components/accordian/accordian";
import typescriptIcon from "../assets/logo/TypeScript.svg";

export default function Home() {
	const skillsList: [AccordionDetails] = [
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
