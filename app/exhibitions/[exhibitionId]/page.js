import {
	getExhibitionById,
	getExhibitionImages,
} from "@/app/actions/exhibitionsActions";
import ExhibitionDetails from "./_components/ExhibitionDetails";

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
