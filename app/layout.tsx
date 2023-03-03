import "./globals.css";

export const metadata = {
	title: "Jackson's Portfolio",
	description:
		"Jackson Triffon, a Full-stack software engineer with experience in UX Design and animations.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
