"use client";
import styles from "./accordian.module.scss";
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

export type AccordionDetails = {
	title: string;
	description: string;
	listDescription: string;
	listItems: [AccordionItemDetails];
};

export type AccordionItemDetails = {
	imageDetails: ImageProps;
	title: string;
};

export default function Accordion(details: AccordionDetails) {
	return (
		<div className={styles.accordionContainer}>
			<div className={styles.leftColumn}>
				<div className={styles.block}></div>
				<div className={styles.thread}></div>
			</div>
			<div className={styles.rightColumn}>
				<h1 className={styles.title}>{details.title}</h1>
				<p className={styles.description}>{details.description}</p>
				<span className={styles.listDescription}>
					{details.listDescription}
				</span>
				<div className={styles.listContainer}>
					{details.listItems.map((item, index) => (
						<div className={styles.item} key={index}>
							<Image
								{...item.imageDetails}
								alt={item.title + " Logo"}
							></Image>
							<p>{item.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
