import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/_navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Art Muse Gallery",
	description: "Art Muse Gallery...",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} ` + "bg-[#EFEDE0]"}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
