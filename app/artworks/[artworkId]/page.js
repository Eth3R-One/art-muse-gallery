import { getArtworkById } from "@/app/actions/artworksActions";
import ArtworkDetails from "./_components/ArtworkDetails";
import { joinImageUrl } from "@/utils/image-url";

export async function generateMetadata({ params: { artworkId } }) {
	const artwork = await getArtworkById(artworkId);
	return {
		title: `${
			artwork?.title ? artwork?.title : "NO TITLE"
		} | Art Muse Gallery`,
		description:
			artwork?.description ?? artwork?.short_description ?? artwork?.title,
		openGraph: {
			images: [
				joinImageUrl(artwork?.image_id) ??
					"https://artic-web.imgix.net/905abd91-5c0d-451b-9319-f7cd1505bc33/IM026911_002-web.jpg?w=1200&h=800&fit=crop",
			],
		},
	};
}

const ArtworkDetailsPage = async ({ params: { artworkId } }) => {
	const artwork = await getArtworkById(artworkId);
	const artworkImages = artwork?.alt_image_ids ?? [];
	return (
		<>
			<ArtworkDetails artwork={artwork} artworkImages={artworkImages} />
		</>
	);
};

export default ArtworkDetailsPage;
