export const getPagesPagination = (totalPages: number): number[] => {
	const pages = [];
	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}
	return pages;
};