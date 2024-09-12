import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

import NoImage from "../../../public/images/no_photo.png";
import Image from "next/image";
import Link from "next/link";
import { joinImageUrl } from "@/utils/image-url";

const ArtworkCard = ({ artwork }) => {
	const description = artwork?.description
		? `${artwork?.description?.slice(0, 100)} ...`
		: "*No description found*";

	const imageUrl = artwork?.image_id
		? joinImageUrl(artwork?.image_id)
		: NoImage;

	return (
		<Card
			className="w-full max-w-xs hover:scale-110 hover:transition-transform cursor-pointer rounded-xl"
			title={artwork?.title}
		>
			<Link href={`/artworks/${artwork?.id}`}>
				<Image
					src={imageUrl}
					alt={artwork?.thumbnail?.alt_text ?? artwork?.title}
					placeholder="blur"
					blurDataURL={artwork?.thumbnail?.lqip}
					className="aspect-[1.6] rounded-lg"
					width={400}
					height={250}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="flex flex-col justify-start px-2 py-1">
					<p className="sm:md:text-2xl items-center font-mono text-lg py-2 text-center text-wrap">
						{artwork?.title?.slice(0, 40)}{" "}
						{artwork?.title?.length > 40 && "...see more"}
					</p>
				</div>
				<span className="px-3 text-wrap">
					<div
						className="px-5 text-center"
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				</span>
			</Link>
		</Card>
	);
};

export default ArtworkCard;
