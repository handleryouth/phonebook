import { Paginator } from "primereact/paginator";

interface PaginationProps {
  page: number;
  handlePageChange: (page: number) => void;
  totalRecords: number;
  rows?: number;
}

export default function Pagination({
  handlePageChange,
  page,
  totalRecords,
  rows = 10,
}: PaginationProps) {
  return (
    <Paginator
      first={page * 10 - 10}
      rows={rows}
      totalRecords={totalRecords}
      onPageChange={(e) => {
        handlePageChange(e.page);
      }}
    />
  );
}
