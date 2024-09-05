export const getArtworks = async () => {
	try {
		const data = await fetch(`${process.env.API_BASE_URL}/artworks/`);
		const artworks = await data.json();

		return artworks?.data;
	} catch (err) {
		console.error("there's something went wrong getting artworks! ", err);
	}
};
