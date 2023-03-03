import { React, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector,useDispatch } from "react-redux";
import { getBooks } from "./Slice/PostSlice";

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
function Posts() {
  const {postBooks,message}=useSelector((state)=>state.postReducer)

  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(getBooks()).unwrap()
  },[])
  return (
    <>
      {message !== "" && <h2>{message}</h2>}
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Body</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {postBooks && postBooks.map((post) => {
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
