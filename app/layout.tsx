import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
});

export const metadata = {
	title: "Netflix Redesign",
	description: "A redesign of Netflix's website by Shakanksh",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
