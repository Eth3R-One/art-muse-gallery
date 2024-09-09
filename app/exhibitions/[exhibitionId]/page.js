import {
	getExhibitionById,
	getExhibitionImagesById,
} from "@/app/actions/exhibitionsActions";
import ExhibitionDetails from "./_components/ExhibitionDetails";

const ExhibitionPage = async ({ params: { exhibitionId } }) => {
	const exhibition = await getExhibitionById(exhibitionId);
	
	const exhibitionImages = await getExhibitionImagesById(exhibition);

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
