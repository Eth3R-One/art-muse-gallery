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
				<p className="sm:md:text-2xl items-center font-mono text-lg py-2 text-center text-wrap">
					{exhibition?.title?.slice(0, 40)}{" "}
					{exhibition?.title?.length > 40 && " ...see more"}
				</p>
			</div>
			<span className="px-3 text-wrap">
				<p
					className="px-5 text-center"
					dangerouslySetInnerHTML={{ __html: short_description }}
				/>
			</span>
		</Card>
	);
};

export default ExhibitionCard;
