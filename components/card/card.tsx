"use client";
import Image, { ImageProps } from "next/image";
import styles from "./card.module.scss";
import anime from "animejs";
import { useEffect, useState } from "react";

export type CardDetails = {
	cardLogo: ImageProps;
	tagline: string;
	flipped: boolean;
};

export default function Card(details: CardDetails) {
	const flipToCoverFullscreen = () => {};

	const hover = () => {
		const tl = anime.timeline({
			loop: true,
			direction: "alternate",
			easing: "easeInOutCirc",
		});

		tl.add({
			targets: ".card",
			translateY: "12px",
			rotate: "5deg",
			duration: 1500,
		}).add({
			targets: ".card",
			translateY: "-12px",
			rotate: "-10deg",
		});
	};
	useEffect(hover, []);

	const [flipped, setFlipped] = useState(false);
	useEffect(flipToCoverFullscreen, [flipped]);

	return (
		<div className={styles.card + " card"}>
			<Image {...details.cardLogo} alt={details.cardLogo.alt} />
			<p className={styles.cardTagline}>{details.tagline}</p>
		</div>
	);
}
