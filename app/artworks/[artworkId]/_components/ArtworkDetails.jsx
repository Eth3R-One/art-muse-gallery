import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import ZoomableImage from "@/components/ui/Zoomable-image";
import Link from "next/link";
import NoPhoto from "@/public/images/no_photo.png";
import { joinImageUrl } from "@/utils/image-url";
import ImageSlider from "@/components/ui/ImageSlider";

const ArtworkDetails = ({ artwork, artworkImages }) => {
	const description =
		artwork?.description ??
		artwork?.short_description ??
		"*No description found*";
	const imageUrl = artwork?.image_id
		? joinImageUrl(artwork?.image_id)
		: NoPhoto;
	const artistInfo = artwork?.artist_display ?? "No artist info";

	if (artwork) {
		return (
			<>
				<Container className="flex flex-col items-center my-5">
					{/* Image Section */}
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
						<div className="relative flex justify-center">
							<ZoomableImage
								src={imageUrl}
								alt={artwork?.title}
								className="max-w-full max-h-svh rounded-lg"
							/>
						</div>
					</div>

					{/* Title and Description Section */}
					<FadeIn className="max-w-3xl text-center mx-auto">
						<h1 className="text-5xl font-medium text-[#3B3A31]">
							{artwork?.title}
						</h1>
						<h2
							className="text-xl text-[#585750] pt-5 font-mono"
							dangerouslySetInnerHTML={{
								__html: artistInfo.replace(/\n/g, "<br />"),
							}}
						/>
						<p className="text-lg text-[#585750] pt-5 font-mono">
							Display Date: {artwork?.date_display}
						</p>
						<article
							className="mt-6 text-lg text-neutral-600 text-justify p-6 border border-slate-300 rounded-lg"
							dangerouslySetInnerHTML={{
								__html: description.replace(/\n/g, "<br />"),
							}}
						/>
					</FadeIn>

					{/* Artwork Details Section */}
					<div className="w-full max-w-3xl border border-slate-300 rounded-lg py-6 my-8 px-6 mx-auto">
						<div className="space-y-4">
							<ArtworkInfo
								label="Artist"
								value={artwork?.artist_title}
							/>
							<ArtworkInfo
								label="Place"
								value={artwork?.place_of_origin}
							/>
							<ArtworkInfo
								label="Date"
								value={`${artwork?.date_start} - ${artwork?.date_end}`}
							/>
							<ArtworkInfo
								label="Medium"
								value={artwork?.medium_display}
							/>
							<ArtworkInfo
								label="Inscriptions"
								value={artwork?.inscriptions}
							/>
							<ArtworkInfo
								label="Dimensions"
								value={artwork?.dimensions}
							/>
							<ArtworkInfo
								label="Credit Line"
								value={artwork?.credit_line}
							/>
							<ArtworkInfo
								label="Reference Number"
								value={artwork?.main_reference_number}
							/>
						</div>
					</div>

					{/* Publication and Exhibition History Section */}
					<AddAccordion
						value="item 1"
						title="Publication History"
						content={artwork?.publication_history}
					/>
					<AddAccordion
						value="item 2"
						title="Exhibition History"
						content={artwork?.exhibition_history}
					/>
					<AddAccordion
						value="item 3"
						title="Provenance"
						content={artwork?.provenance_text}
					/>

					{/* Image Slider Section */}
					<div className="w-full max-w-4xl mx-auto flex justify-center">
						{artworkImages?.length > 0 ? (
							<ImageSlider imagesArray={artworkImages} />
						) : (
							<div className="border border-rose-300 px-20 py-10 rounded-lg text-center">
								<p>No image found for slide</p>
							</div>
						)}
					</div>

					{/* Official Website Link */}
					<div className="flex justify-center my-10">
						<Link
							href={`https://www.artic.edu/artworks/${artwork?.id}`}
							className="py-3 px-5 bg-[#3B3A31] text-[#EFEDE0] rounded-lg hover:bg-inherit hover:text-[#3B3A31] hover:border hover:border-[#3B3A31]"
							target="_blank"
						>
							Official Website
						</Link>
					</div>
				</Container>
			</>
		);
	}

	return (
		<div className="min-h-screen flex justify-center items-center">
			<Container className="text-center border border-rose-500 rounded-lg p-10">
				<section className="p-10 font-mono font-bold text-xl">
					No artwork found
				</section>
				<Link
					href={"/artworks"}
					className="bg-[#3B3A31] text-[#EFEDE0] px-3 py-5 rounded-lg hover:bg-inherit hover:text-[#3B3A31] border border-[#3B3A31]"
				>
					See all artworks
				</Link>
			</Container>
		</div>
	);
};

// Helper component for artwork information display
const ArtworkInfo = ({ label, value }) => (
	<p className="text-lg">
		<span className="font-semibold">{label}:</span>{" "}
		<span className="font-mono px-2">{value ?? "Not available"}</span>
	</p>
);

const AddAccordion = ({ value, title, content }) => (
	<Accordion
		type="single"
		collapsible
		className="w-full max-w-3xl border border-slate-300 rounded-lg py-6 my-8 px-6 mx-auto"
	>
		<AccordionItem value={value}>
			<AccordionTrigger className="font-mono text-3xl text-center uppercase">
				{title}
			</AccordionTrigger>
			<AccordionContent>
				<HistorySection content={content} />
			</AccordionContent>
		</AccordionItem>
	</Accordion>
);
// Helper component for History sections
const HistorySection = ({ content }) => (
	<div className="w-full">
		<article
			className="mt-4 text-lg mx-4 text-wrap"
			dangerouslySetInnerHTML={{
				__html:
					content?.replace(/\n/g, "<br />") || "No history available.",
			}}
		/>
	</div>
);

export default ArtworkDetails;
