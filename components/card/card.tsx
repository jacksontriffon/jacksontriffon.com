"use client";
import Image, { ImageProps } from "next/image";
import styles from "./card.module.scss";
import anime, { AnimeTimelineInstance } from "animejs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export type CardDetails = {
	projectName: string;
	cardLogo: ImageProps;
	tagline: string;
};
let hoverAnimation: AnimeTimelineInstance;

export default function Card(details: CardDetails) {
	const router = useRouter();

	function routeToProject() {
		flipToCoverFullscreen();
		setTimeout(() => {
			router.push("/projects/" + details.projectName);
		}, 2000);
	}

	const flipToCoverFullscreen = () => {
		anime.remove(".card");

		anime({
			targets: ".card",
			rotateX: "180deg",
			rotateY: "180deg",
			rotateZ: "90deg",
			translateY: "-200px",
			translateZ: "-20px",
			height: "100vw",
			width: "100vh",
			opacity: 0,
			duration: 2000,
			easing: "easeOutCirc",
		});
	};

	const hover = () => {
		hoverAnimation = anime.timeline({
			loop: true,
			direction: "alternate",
			easing: "easeInOutCirc",
		});

		hoverAnimation
			.add({
				targets: ".card",
				translateY: "12px",
				rotate: "5deg",
				duration: 1500,
			})
			.add({
				targets: ".card",
				translateY: "-12px",
				rotate: "-10deg",
			});
	};
	useEffect(hover, []);

	return (
		<div className={styles.card + " card"} onClick={routeToProject}>
			<Image {...details.cardLogo} alt={details.cardLogo.alt} />
			<p className={styles.cardTagline}>{details.tagline}</p>
		</div>
	);
}
