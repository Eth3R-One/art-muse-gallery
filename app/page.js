import { Button } from "@/components/ui/button";
import HeroSection from "./_components/_herosection/HeroSection";
import ExhibitionsSection from "./_components/_exhibitions/ExhibitionsSection";
import { Suspense } from "react";
import SpinnerLoader from "./_components/SpinnerLoader";
import ArtworksSection from "./_components/_artworks/ArtworksSection";

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
