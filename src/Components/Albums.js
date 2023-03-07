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
import { getBooks } from "./Slice/AlbumSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'brown',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function Albums() {
  const { books, message } = useSelector((state) => state.albumReducer);
  console.log({ books });
  console.log({ message });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks()).unwrap();
  }, []);

  return (
    <>
      {message && <h2>{message}</h2>}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {books &&
              books.map((post) => {
                const { id, title } = post;
                return (
                  <StyledTableRow key={id}>
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

export default Albums;
