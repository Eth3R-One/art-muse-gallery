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

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: "Artworks | Art Muse Gallery",
		openGraph: {
			images: [
				"https://artic-web.imgix.net/905abd91-5c0d-451b-9319-f7cd1505bc33/IM026911_002-web.jpg?w=1200&h=800&fit=crop",
			],
		},
	};
}

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
