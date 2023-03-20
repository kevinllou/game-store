export const getPagesPagination = (totalPages: number): number[] => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return pages;
}