"use client";
import styles from "./page.module.scss";
import Accordion, { AccordionDetails } from "@/components/accordian/accordian";
import typescriptIcon from "../assets/logo/TypeScript.svg";
import figmaIcon from "../assets/logo/Figma.svg";
import adobeIcon from "../assets/logo/Adobe AE.svg";
import lottieIcon from "../assets/logo/Lottie.svg";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

	const router = useRouter();
	const routeToNewPage = (href: string) => {
		setTimeout(() => {
			router.push(href);
		}, 1000);
	};

	return (
		<main className={styles.main}>
			<div className={styles.contentContainer}>
				<Link href="/contact">Jackson Triffon</Link>
				<div>
					{skillsList.map((item, index) => (
						<Accordion key={index} {...item} />
					))}
				</div>
				<div className={styles.divider}></div>
				<div className={styles.buttonWrapper}>
					<Button
						{...{
							text: "See Projects",
							clickEvent: () => {
								routeToNewPage("/projects");
							},
						}}
					/>
				</div>
			</div>
		</main>
	);
}
