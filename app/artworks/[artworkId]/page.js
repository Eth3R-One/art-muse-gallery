import { getArtworkById } from "@/app/actions/artworksActions";
import ArtworkDetails from "./_components/ArtworkDetails";

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
