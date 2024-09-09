export const joinImageUrl = (id) => {
	return `${process.env.IMAGE_BASE_URL}/${id}/${process.env.IMAGE_REST_URL}`;
};
