import "./globals.scss";
import styles from "./layout.module.scss";
import localFont from "next/font/local";
import Header from "@/components/jt-header/jt-header";
import Tabs from "@/components/tabs/tabs";
import Providers from "./providers";
import { GlobalContextProvider } from "./store";

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
			<body>
				<GlobalContextProvider>
					<Providers>
						<Header />
						{children}
						<Tabs />
					</Providers>
				</GlobalContextProvider>
			</body>
		</html>
	);
}
