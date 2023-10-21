export interface PaginationProps {
  page: number;
  handlePageChange: (page: number) => void;
  totalRecords: number;
  rows?: number;
}
