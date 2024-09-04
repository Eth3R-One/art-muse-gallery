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
