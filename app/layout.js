import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/_navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Art Muse Gallery",
	description: "Art Muse Gallery...",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
