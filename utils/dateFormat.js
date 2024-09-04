export const formatDate = (date) => {
	const options = {
		year: "numeric",
		month: "short",
	};
	const dateToBeFormatted = new Date(date);

	return dateToBeFormatted.toLocaleDateString("en-US", options);
};
