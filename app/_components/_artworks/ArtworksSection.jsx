import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import NoImage from "../../../public/images/no_photo.png";
import { formatDate } from "@/utils/dateFormat";
import { getArtworks } from "@/app/actions/artworksActions";

const ArtworksSection = async () => {
	const artworks = await getArtworks();
	return (
		<div className="p-20">
			<div className="flex flex-row gap-5 justify-between items-baseline ">
				<p className=" text-3xl font-mono lg:text-6xl text-[#3B3A31] uppercase">
					Artworks
				</p>
				<p className="underline font-thin text-xl">See all Artworks</p>
			</div>
			<div className="flex flex-col pt-5">
				<Carousel className="-ml-1">
					<CarouselContent className="-ml-1">
						{artworks?.map((artworks) => (
							<CarouselItem
								key={artworks?.id}
								className="px-2 md:px-4 md:basis-1/2 lg:basis-1/6 cursor-pointer flex flex-col justify-center "
								title={`${artworks?.title}: ${artworks?.thumbnail?.alt_text}`}
							>
								<div className="rounded-lg flex flex-col justify-between hover:scale-110">
									<Card className="relative rounded-lg">
										<CardContent className="relative aspect-square overflow-hidden">
											<Image
												src={
													`${process.env.IMAGE_BASE_URL}/${artworks?.image_id}/${process.env.IMAGE_REST_URL}` ??
													NoImage
												}
												alt={
													artworks?.thumbnail?.alt_text ??
													artworks?.title
												}
												placeholder="blur"
												blurDataURL={artworks?.thumbnail?.lqip}
												layout="fill"
												objectFit="cover"
												className="rounded-lg"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											<div className="absolute bottom-2 right-2 bg-rose-100 bg-opacity-60 text-rose-600 text-xs px-2 py-1 rounded">
												<p>{artworks?.place_of_origin}</p>
											</div>
										</CardContent>
										<div className="border bg-[#EFEDE0] flex flex-col justify-between">
											<p className="text-xl font-mono px-5">
												{artworks?.title}
											</p>

											{artworks?.fiscal_year && (
												<p className="text-sm font-sans px-5">
													({artworks?.fiscal_year})
												</p>
											)}
										</div>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
};

export default ArtworksSection;
