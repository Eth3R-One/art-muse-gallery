import { getExhibitions } from "../actions/exhibitionsActions";
import ExhibitionsList from "./_components/ExhibitionsList";

const ExhibitionsPage = async () => {
	const exhibitions = await getExhibitions();

	return (
		<section className="p-20">
			<div className="flex flex-row gap-10 pb-10 justify-center">
				<p className="text-3xl font-mono lg:text-6xl text-[#3B3A31] uppercase">
					Exhibitions
				</p>
			</div>
			<ExhibitionsList exhibitions={exhibitions} />
		</section>
	);
};

export default ExhibitionsPage;
