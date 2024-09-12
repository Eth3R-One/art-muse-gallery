import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import NoImage from "@/public/images/no_photo.png";
import { formatDate } from "@/utils/dateFormat";
import { getArtworks } from "@/app/actions/artworksActions";
import Link from "next/link";
import ArtworksList from "./_components/ArtworksList";

const ArtworksPage = async () => {
	const artworks = await getArtworks();
	return (
		<section className="p-20">
			<div className="flex flex-row gap-10 pb-10 justify-center">
				<p className="text-3xl font-mono lg:text-6xl text-[#3B3A31] uppercase">
					Artworks
				</p>
			</div>
			<ArtworksList artworks={artworks} />
		</section>
	);
};

export default ArtworksPage;
