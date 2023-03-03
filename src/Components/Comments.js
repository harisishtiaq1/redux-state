import { React,useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector,useDispatch } from "react-redux";
import { getBooks } from "./Slice/CommentsSlice";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function Comments() {
  const {commentBooks,message}=useSelector((state)=>state.commentReducer)
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(getBooks()).unwrap()
  },[])
  return (
    <>
      {message  && <h2>{message}</h2>}
      <TableContainer component={Paper}>
        <Table aria-label="sticky table" stickyHeader>
          <TableHead position="fixed">
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>

              <StyledTableCell align="left">Body</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {commentBooks && commentBooks.slice(0, 50).map((post) => {
              const { name, email, body, id } = post;
              return (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {id}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {name.substring(0, 10)}
                  </StyledTableCell>
                  <StyledTableCell align="left">{email}</StyledTableCell>
                  <StyledTableCell align="left">
                    {body.substring(0, 15)}
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

export default Comments;
