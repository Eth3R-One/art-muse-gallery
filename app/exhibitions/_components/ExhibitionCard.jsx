import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

import NoImage from "../../../public/images/no_photo.png";
import Image from "next/image";

const ExhibitionCard = ({ exhibition }) => {
	const short_description = exhibition?.short_description
		? `${exhibition?.short_description?.slice(0, 100) + " ..."}`
		: "*No description found*";

	return (
		<Card
			className="w-full max-w-xs hover:scale-110 hover:transition-transform cursor-pointer rounded-xl"
			title={exhibition?.title}
		>
			<Image
				src={exhibition?.image_url ?? NoImage}
				alt={exhibition?.title}
				width="400"
				height="250"
				className="aspect-[1.6] rounded-xl"
			/>

			<div className="flex flex-col justify-start px-2 py-1">
				{/* <CardHeader className="p-4"> */}
				<p className="sm:md:text-2xl items-center font-mono text-lg py-2 text-center text-wrap">
					{exhibition?.title?.slice(0, 40)}{" "}
					{exhibition?.title?.length > 40 && " ...see more"}
				</p>

				{/* </CardHeader> */}
				{/* <p className="font-normal bg-rose-200 text-rose-600 rounded-md px-2">
					{exhibition?.status}
				</p> */}
			</div>
			<span className="px-3 text-wrap">
				{/* <p className="px-5 text-center">
					{exhibition?.short_description
						? exhibition?.short_description?.slice(0, 100)
						: "** No description found **"}
				</p> */}
				<p
					className="px-5 text-center"
					dangerouslySetInnerHTML={{ __html: short_description }}
				/>
			</span>
			{/* <CardContent className="p-4">
				<p className="text-2xl font-semibold">$199.00</p>
			</CardContent> */}
		</Card>
	);
};

export default ExhibitionCard;
