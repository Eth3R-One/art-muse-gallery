export const joinImageUrl = (id) => {
	const baseUrl = "https://www.artic.edu/iiif/2";
	const restUrl = "full/843,/0/default.jpg";
	return `${baseUrl}/${id}/${restUrl}`;
};
