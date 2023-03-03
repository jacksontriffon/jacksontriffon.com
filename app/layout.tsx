import "./globals.css";
import localFont from "next/font/local";

// Preload font
const redHatDisplay = localFont({
	src: "../assets/font/RedHatDisplay-VariableFont_wght.ttf",
	display: "swap",
});

export const metadata = {
	title: "Jackson Triffon",
	description:
		"Jackson Triffon, a Full-stack software engineer with experience in UX Design and animations.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={redHatDisplay.className}>
			<body>{children}</body>
		</html>
	);
}
