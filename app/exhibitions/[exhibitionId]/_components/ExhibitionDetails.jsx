import Image from "next/image";
import { Container } from "../../../../components/ui/Container";
import { FadeIn } from "../../../../components/ui/FadeIn";
import NoPhoto from "../../../../public/images/no_photo.png";
import { formatDate } from "@/utils/dateFormat";
import ZoomableImage from "../../../../components/ui/Zoomable-image";
import ImageSlider from "../../../../components/ui/ImageSlider";
import Link from "next/link";

const ExhibitionDetails = ({ exhibition, exhibitionImages }) => {
	const short_description = exhibition?.short_description
		? `${exhibition?.short_description}`
		: "*No description found*";

	if (exhibition) {
		return (
			<>
				<Container className="my-10 sm:mt-10 md:mt-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
						<div className="relative overflow-hidden flex justify-center">
							<div className="flex flex-col items-center">
								<ZoomableImage
									src={exhibition?.image_url ?? NoPhoto}
									alt={exhibition?.title}
									className="rounded-lg p-2"
									style={{
										maxWidth: "100%",
										maxHeight: "600px",
										width: "auto",
										height: "auto",
									}}
								/>
							</div>
						</div>
					</div>
					<FadeIn className="max-w-3xl">
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#3B3A31] text-center md:text-left">
							{exhibition?.title}
						</h1>
						<div
							className="mt-6 text-lg sm:text-xl text-neutral-600 text-center md:text-left"
							dangerouslySetInnerHTML={{ __html: short_description }}
						/>
					</FadeIn>
					<div className="py-5 gap-5">
						<span className="py-2 bg-gray-500">
							<p>Start at: {formatDate(exhibition?.aic_start_at)}</p>
							<p>End at: {formatDate(exhibition?.aic_end_at)}</p>
						</span>
						<span
							className={`px-2 text-white rounded-sm ${
								exhibition?.status == "Closed"
									? " bg-rose-500"
									: " bg-green-500"
							}`}
						>
							{exhibition?.status}
						</span>
					</div>
				</Container>
				<div className="flex flex-col items-center px-10 mx-10 gap-10">
					{exhibitionImages?.length > 0 ? (
						<section className="px-10 mb-20 mx-10">
							<ImageSlider imagesArray={exhibitionImages} />
						</section>
					) : (
						<section className="mb-20 mx-10 flex text-center text-nowrap border border-rose-300 px-20 py-10 rounded-lg">
							<p>No image found for slide</p>
						</section>
					)}
				</div>

				<div className="flex flex-col items-center m-10">
					<section>
						<Link
							href={exhibition?.web_url}
							className="py-3 px-5 bg-[#3B3A31] text-[#EFEDE0] rounded-lg hover:bg-inherit hover:text-[#3B3A31] hover:border hover:border-[#3B3A31]"
							target="_blank"
						>
							Official Website
						</Link>
					</section>
				</div>
			</>
		);
	}

	return (
		<div className="min-h-screen flex justify-center items-center">
			<Container className="text-center border border-rose-500 rounded-lg p-10">
				<section className="p-10 font-mono font-bold text-xl">
					No exhibition found
				</section>
				<Link
					href={"/exhibitions"}
					className="bg-[#3B3A31] text-[#EFEDE0] px-3 py-5 rounded-lg hover:bg-inherit hover:text-[#3B3A31] border border-[#3B3A31]"
				>
					See all exhibitions
				</Link>
			</Container>
		</div>
	);
};

export default ExhibitionDetails;
