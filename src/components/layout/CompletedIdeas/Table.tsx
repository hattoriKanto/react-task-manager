import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { TableContent, TableHeaders } from ".";

export const TableComponent = () => {
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

        <TableContent />
      </Table>
    </TableContainer>
  );
};
