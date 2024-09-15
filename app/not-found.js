import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const metadata = {
	title: "Not found | Art Muse Gallery",
};
export default function NotFound() {
	// return (
	// 	<div>
	// 		<h2>Not Found</h2>
	// 		<p>Could not find requested resource</p>
	// 		<Link href="/">Return Home</Link>
	// 	</div>
	// );
	return (
		<div className="min-h-screen flex justify-center items-center">
			<Container className="text-center border border-rose-500 rounded-lg p-10">
				<section className="p-10 pb-20">
					<h2 className="font-mono font-bold text-6xl pb-10">Not found</h2>
					<p className="text-xl  text-[#3B3A31] font-mono rounded-lg">
						Could not find requested resource
					</p>
				</section>
				<Link
					href={"/"}
					className="bg-[#3B3A31] text-[#EFEDE0] px-5 py-2 rounded-lg hover:bg-inherit hover:text-[#3B3A31] border border-[#3B3A31]"
				>
					Return Home
				</Link>
			</Container>
		</div>
	);
}
