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
import { getBooks } from "./Slice/PostSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "brown",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "2px dashed black",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
function Posts() {
  const { postBooks, message } = useSelector((state) => state.postReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks()).unwrap();
  });
  return (
    <>
      {message !== "" && <h2>{message}</h2>}
      <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Body</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {postBooks &&
              postBooks.map((post) => {
                const { body, id, title } = post;
                return (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {title.substring(0, 15)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {body.substring(0, 50)}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Posts;
