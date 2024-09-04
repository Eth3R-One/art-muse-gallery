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
								className="pl-2 md:pl-4 md:basis-1/12 lg:basis-1/4 cursor-pointer"
							>
								<div className="p-1">
									<Card>
										<CardContent className="flex aspect-square items-center justify-center p-6">
											<Image
												src={exhibition?.image_url ?? NoImage}
												height={1000}
												width={1000}
												alt={exhibition?.title}
											/>
										</CardContent>
										<div className="border bg-[#EFEDE0]">
											<p className="text-xl font-mono pl-5">
												{exhibition?.title}
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
