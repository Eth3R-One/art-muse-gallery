export const getExhibitions = async ({ LIMIT = 0, PAGE = 1 } = {}) => {
	try {
		const response = await fetch(
			`${process.env.API_BASE_URL}/exhibitions?limit=${LIMIT}&page=${PAGE}`
		);

		const exhibitionsData = await response.json();
		return exhibitionsData?.data;
	} catch (err) {
		console.error("Failed to fetch exhibitions:", err);
		// throw err;
	}
};

export const getExhibitionById = async (exhibitionId) => {
	try {
		const response = await fetch(
			`${process.env.API_BASE_URL}/exhibitions/${exhibitionId}`
		);

		const exhibition = await response.json();
		return exhibition?.data;
	} catch (err) {
		console.log(err);
	}
};

export const getExhibitionImagesById = async (exhibition) => {
	try {
		// const response = await fetch(
		// 	`${process.env.API_BASE_URL}/exhibitions/${exhibitionId}?fields=id,title,image_id,alt_image_ids`
		// );

		// const exhibition = await response.json();
		if (exhibition?.image_id) {
			return [exhibition?.image_id, ...exhibition?.alt_image_ids];
		} else {
			return [...exhibition?.alt_image_ids];
		}
	} catch (err) {
		console.log(err);
	}
};
// export const getExhibitionImagesById = async (exhibitionId) => {
// 	try {
// 		const response = await fetch(
// 			`${process.env.API_BASE_URL}/exhibitions/${exhibitionId}?fields=id,title,image_id,alt_image_ids`
// 		);

// 		const exhibition = await response.json();
// 		const exhibitionImages = exhibition?.data?.image_id
// 			? [exhibition?.data?.image_id]
// 			: [];
// 		return [exhibitionImages, ...exhibition?.data?.alt_image_ids];
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
