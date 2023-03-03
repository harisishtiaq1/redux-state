import { React, useState, useEffect } from "react";
import axios from "axios";
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
  const [books,message]=useSelector((state)=>state.book)
  // const [myData, setMyData] = useState([]);
  // const [isError, setIsError] = useState("");
  // const getMyPostData = async () => {
  //   try {
  //     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  //     setMyData(res.data.slice(0,50));
  //     console.log("data here", setMyData);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getMyPostData();
  // }, []);
  
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(getBooks()).unwrap()
  },[])
  return (
    <>
      {message !== "" && <h2>{message}</h2>}
      <TableContainer component={Paper}>
        <Table sx={{ width: 980 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Body</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {books && books.map((post) => {
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
