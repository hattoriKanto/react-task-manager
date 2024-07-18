export interface TableDataType {
  id: number;
  title: string;
  type: string;
  date: string;
}

export enum TableHeaders {
  id = "",
  title = "Tilte",
  type = "Type",
  date = "When",
}
