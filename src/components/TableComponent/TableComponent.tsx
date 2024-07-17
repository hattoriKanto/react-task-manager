import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableDataType, TableHeaders } from "./TableComponent.types";
import {
  CustomCellContent,
  CustomIDCellContent,
} from "./TableComponent.styles";

const data: TableDataType[] = [
  {
    id: 1,
    title: "Item 1",
    type: "Education",
    date: "now",
  },
  {
    id: 2,
    title: "Item 2",
    type: "Relaxation",
    date: "now",
  },
  {
    id: 3,
    title: "Item 3",
    type: "Music",
    date: "yestreday",
  },
];

export const TableComponent = () => {
  const [tableContent, setTableContent] = useState<TableDataType[]>([]);

  useEffect(() => {
    setTableContent(data);
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {Object.entries(TableHeaders).map(([key, value]) => {
              return <TableCell key={key}>{value}</TableCell>;
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableContent.map((item) => {
            const { id } = item;
            return (
              <TableRow key={id}>
                {Object.entries(item).map(([key, value]) => {
                  if (key === "id") {
                    return (
                      <TableCell
                        sx={{ width: "10%" }}
                        key={key}
                      >
                        <CustomIDCellContent>{value}</CustomIDCellContent>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell
                      sx={{ width: "30%" }}
                      key={key}
                    >
                      <CustomCellContent>{value}</CustomCellContent>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
