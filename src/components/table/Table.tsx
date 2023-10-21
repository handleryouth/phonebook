import { useMemo } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { TableCell, TableComponentProps } from "types";

export default function Table<
  T extends object,
  K extends Record<string, TableCell>
>({
  columns,
  data,
  renderItem,
  className,
  onRowClick,
  sortableField,
  loading,
  keyExtractor,
}: TableComponentProps<T, K>) {
  const entries = useMemo(() => Object.entries(columns), [columns]);

  return (
    <DataTable
      size="normal"
      className={className}
      value={data}
      selectionMode="single"
      stripedRows
      loading={loading}
      dataKey={keyExtractor}
      tableStyle={{ minWidth: "50rem" }}
      onSelectionChange={(e) => onRowClick && onRowClick(e.value)}
    >
      {entries.map(([key, value]) => (
        <Column
          sortable={sortableField?.[key as keyof T] ?? false}
          key={key}
          body={(item) => renderItem(item)[key as keyof T]}
          field={key}
          header={value}
        />
      ))}
    </DataTable>
  );
}
