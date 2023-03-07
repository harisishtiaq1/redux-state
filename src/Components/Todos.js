import { React, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "./Slice/TodosSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "brown",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border:'2px dotted brown'

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
function Todos() {
  const { todoBooks, message } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks()).unwrap();
  }, []);
  return (
    <>
      {message && <h2>{message}</h2>}
      <TableContainer component={Paper} sx={{maxHeight:'500px'}}>
        <Table aria-label="simple table"  stickyHeader   >
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {todoBooks &&
              todoBooks.slice(0,100).map((post) => {
                const { id, title } = post;
                return (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {id}
                    </StyledTableCell>
                    <StyledTableCell align="left">{title}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Todos;
