import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/_navbar/Navbar";
import Footer from "./_components/_footer/Footer";
import { Toaster } from "@/components/ui/toaster";

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
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
