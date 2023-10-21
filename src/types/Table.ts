import { ReactNode } from "react";

export type TableCell = ReactNode;

export type TableColumn<T> = Partial<Record<keyof T, TableCell>>;

export type TableColumnString<T extends string> = Partial<Record<T, TableCell>>;
