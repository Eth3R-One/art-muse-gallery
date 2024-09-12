export const getArtworks = async ({ PAGE = 1, LIMIT = 0 } = {}) => {
	try {
		const data = await fetch(
			`${process.env.API_BASE_URL}/artworks/?limit=${LIMIT}&page=${PAGE}`
		);
		const artworks = await data.json();

		return artworks?.data;
	} catch (err) {
		console.error("there's something went wrong getting artworks! ", err);
	}
};

export const getArtworkById = async (artworkId) => {
	try {
		const response = await fetch(
			`${process.env.API_BASE_URL}/artworks/${artworkId}`
		);

		const artwork = await response.json();
		return artwork?.data;
	} catch (err) {
		console.log(err);
	}
};
