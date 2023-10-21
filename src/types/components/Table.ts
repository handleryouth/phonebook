import { ReactNode } from "react";

export type TableCell = ReactNode;

export type TableColumn<T> = Partial<Record<keyof T, TableCell>>;

export type TableColumnString<T extends string> = Partial<Record<T, TableCell>>;

export interface TableComponentProps<
  T extends object,
  K extends Record<string, TableCell>
> {
  data: T[] | undefined;
  columns: K;
  className?: string;
  renderItem: (item: T) => TableColumn<T> | TableColumnString<string>;
  onRowClick?: (item: T) => void;
  sortableField?: Partial<Record<keyof K, boolean>>;
  loading?: boolean;
  keyExtractor?: Extract<keyof T, string>;
}
