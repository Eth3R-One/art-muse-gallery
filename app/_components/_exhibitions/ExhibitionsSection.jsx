import { getExhibitions } from "@/app/actions/exhibitionsActions";
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

const ExhibitionsSection = async () => {
	const exhibitions = await getExhibitions();
	return (
		<div className="p-20">
			<div className="flex flex-row gap-5 justify-between items-baseline ">
				<p className=" text-3xl font-mono lg:text-6xl text-[#3B3A31] uppercase">
					Exhibitions
				</p>
				<p className="underline font-thin text-xl">See all Exhibitions</p>
			</div>
			<div className="flex flex-col pt-5">
				<Carousel className="-ml-1">
					<CarouselContent className="-ml-1">
						{exhibitions?.map((exhibition) => (
							<CarouselItem
								key={exhibition?.id}
								className="px-2 md:px-4 md:basis-1/2 lg:basis-1/6 cursor-pointer flex flex-col justify-center "
								title={exhibition?.title}
							>
								<div className="border border-[#1f1b02] rounded-lg flex flex-col justify-between hover:scale-110">
									<Card className="relative rounded-lg">
										<CardContent className="relative aspect-square overflow-hidden">
											<Image
												src={exhibition?.image_url ?? NoImage}
												alt={exhibition?.title}
												layout="fill"
												objectFit="cover"
												className="rounded-lg"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											<div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
												<p>{exhibition?.status}</p>
											</div>
										</CardContent>
										<div className="border bg-[#EFEDE0] flex flex-col justify-between">
											<p className="text-xl font-mono px-5">
												{exhibition?.title}
											</p>

											<p className="text-sm font-sans px-5">
												({formatDate(exhibition?.aic_start_at)}{" "}
												{"-"}
												{formatDate(exhibition?.aic_end_at)})
											</p>
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

export default ExhibitionsSection;
