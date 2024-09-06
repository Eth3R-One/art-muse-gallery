import { Button } from "@/components/ui/button";
import HeroSection from "./_components/_herosection/HeroSection";
import ExhibitionsSection from "./_components/_exhibitions/ExhibitionsSection";
import { Suspense } from "react";
import SpinnerLoader from "./_components/SpinnerLoader";
import ArtworksSection from "./_components/_artworks/ArtworksSection";

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: "Art Muse Gallery",
		description:
			"Located downtown by Millennium Park, this top art museum is TripAdvisor&#039;s #1 Chicago attraction—a must when visiting the city.",
		openGraph: {
			images: [
				"https://artic-web.imgix.net/905abd91-5c0d-451b-9319-f7cd1505bc33/IM026911_002-web.jpg?w=1200&h=800&fit=crop",
			],
		},
	};
}

export default function Home() {
	return (
		<>
			<HeroSection />
			<Suspense fallback={<SpinnerLoader />}>
				<ExhibitionsSection />
			</Suspense>

			<Suspense fallback={<SpinnerLoader />}>
				<ArtworksSection />
			</Suspense>
		</>
	);
}
