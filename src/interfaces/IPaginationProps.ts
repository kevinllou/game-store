export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    maxPageLimit: number;
    minPageLimit: number;
    updateMaxPageLimit: (currentMax: number) => void;
    updateMinPageLimit: (currentMin: number) => void;
    updateCurrentPage: (currentPage: number) => void;
}