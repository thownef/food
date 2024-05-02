
import MainHeaderBackground from "@/components/main-header/main-header-background";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export async function metadata() {
	return {
		title: "NEXTLEVEL FOOD",
		description: "Taste & share food from all over the world.",
		openGraph: {
			images: [`/images/logo.png`],
		},
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<MainHeaderBackground />
				<MainHeader />
				{children}
			</body>
		</html>
	);
}
