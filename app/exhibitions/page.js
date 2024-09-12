import { getExhibitions } from "../actions/exhibitionsActions";
import ExhibitionsList from "./_components/ExhibitionsList";

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: "Exhibitions | Art Muse Gallery",
		openGraph: {
			images: [
				"https://artic-web.imgix.net/905abd91-5c0d-451b-9319-f7cd1505bc33/IM026911_002-web.jpg?w=1200&h=800&fit=crop",
			],
		},
	};
}

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
