import MainHeaderBackground from "@/components/main-header/main-header-background";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
	title: "NEXTLEVEL FOOD",
	description: "Delicious meals, shared by a food-loving community.",
	openGraph: {
		images: [`/images/logo.png`],
	},
};

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
