import NoImage from "@/public/images/no_photo.png";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import ZoomableImage from "./Zoomable-image";
import { joinImageUrl } from "@/utils/image-url";

export function ImageSlider({ imagesArray }) {
	return (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{imagesArray?.map((imageId) => (
					<CarouselItem key={imageId}>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<span className="text-4xl font-semibold">
										<ZoomableImage
											src={joinImageUrl(imageId)}
											alt={imageId}
											className="rounded-lg p-2"
											style={{
												maxWidth: "100%",
												maxHeight: "600px",
												width: "auto",
												height: "auto",
											}}
										/>
									</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}

export default ImageSlider;
