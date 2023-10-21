import { Paginator } from "primereact/paginator";
import { PaginationProps } from "types";

export default function Pagination({
  handlePageChange,
  page,
  totalRecords,
  rows = 10,
}: PaginationProps) {
  return (
    <Paginator
      aria-label="pagination"
      first={page * 10 - 10}
      rows={rows}
      totalRecords={totalRecords}
      onPageChange={(e) => {
        handlePageChange(e.page);
      }}
    />
  );
}
