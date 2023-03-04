"use client";
import styles from "./accordian.module.scss";
import Image from "next/image";
import Logo, { LogoDetails } from "../logo-item/logo";

export type AccordionDetails = {
	title: string;
	description: string;
	listDescription: string;
	listItems: LogoDetails[];
};

export default function Accordion(details: AccordionDetails) {
	return (
		<div className={styles.accordionContainer}>
			<div className={styles.leftColumn}>
				<div>
					<div className={styles.block}></div>
				</div>
				<div className={styles.thread}></div>
			</div>
			<div className={styles.rightColumn}>
				<h1 className={styles.title}>{details.title}</h1>
				<h5 className={styles.description}>{details.description}</h5>
				<h5 className={styles.listDescription}>
					{details.listDescription}
				</h5>
				<div className={styles.listContainer}>
					{details.listItems.map((item, index) => (
						<Logo key={index} {...item} />
					))}
				</div>
			</div>
		</div>
	);
}
