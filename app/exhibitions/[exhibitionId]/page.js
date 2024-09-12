import {
	getExhibitionById,
	getExhibitionImages,
} from "@/app/actions/exhibitionsActions";
import ExhibitionDetails from "./_components/ExhibitionDetails";
import { joinImageUrl } from "@/utils/image-url";

export async function generateMetadata({ params: { exhibitionId } }) {
	const exhibition = await getExhibitionById(exhibitionId);
	return {
		title: `${
			exhibition?.title ? exhibition?.title : "NO TITLE"
		} | Art Muse Gallery`,
		description:
			exhibition?.description ??
			exhibition?.short_description ??
			exhibition?.title,
		openGraph: {
			images: [
				exhibition?.image_url ??
					"https://artic-web.imgix.net/905abd91-5c0d-451b-9319-f7cd1505bc33/IM026911_002-web.jpg?w=1200&h=800&fit=crop",
			],
		},
	};
}

const ExhibitionPage = async ({ params: { exhibitionId } }) => {
	const exhibition = await getExhibitionById(exhibitionId);

	const exhibitionImages = await getExhibitionImages(exhibition);

	return (
		<>
			<ExhibitionDetails
				exhibition={exhibition}
				exhibitionImages={exhibitionImages}
			/>
		</>
	);
};

export default ExhibitionPage;
