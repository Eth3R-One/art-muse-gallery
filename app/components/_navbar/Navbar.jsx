import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "../../../public/images/abstract.gif";
import Image from "next/image";
import { Protest_Guerrilla } from "next/font/google";
import { MuseoModerno } from "next/font/google";

const Protest_Guerrilla_Font = Protest_Guerrilla({
	subsets: ["latin"],
	weight: "400",
});
const MuseoModerno_Font = MuseoModerno({
	subsets: ["latin"],
	weight: "600",
});

const Navbar = () => {
	return (
		<div className="flex items-center justify-between px-10 py-2 bg-[#EBE9CF]">
			<Link href="/" className="flex items-center gap-2" prefetch={false}>
				<Image
					className="h-10 w-10 border rounded-full bg-current"
					src={Logo}
					alt="Art Muse Gallery Logo"
				/>
				<span
					className={
						`${MuseoModerno_Font.className} ` +
						"text-3xl  font-bold text-[#2C2D1F] text-nowrap"
					}
				>
					Art Muse Gallery
				</span>
			</Link>
			<div className="hidden md:flex gap-4 text-[#3B3A31]">
				<Link
					href="/"
					className="text-lg font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Home
				</Link>
				<Link
					href="#"
					className="text-lg font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					About
				</Link>
				<Link
					href="#"
					className="text-lg font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Services
				</Link>
				<Link
					href="#"
					className="text-lg font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Portfolio
				</Link>
				<Link
					href="#"
					className="text-lg font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Contact
				</Link>
			</div>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="lg:hidden">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="bg-[#EBE9CF] ">
					<div className="grid w-[200px] p-4 ">
						<Link
							href="#"
							className="text-lg font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							Home
						</Link>
						<Link
							href="#"
							className="text-lg font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							About
						</Link>
						<Link
							href="#"
							className="text-lg font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							Services
						</Link>
						<Link
							href="#"
							className="text-lg font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							Portfolio
						</Link>
						<Link
							href="#"
							className="text-lg font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							Contact
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Navbar;

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}
