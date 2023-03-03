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
function Users() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const getMyPostData = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setMyData(res.data);
      console.log("data here", setMyData);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);
  return (
    <>
      {isError !== "" && <h2>{isError}</h2>}
      <TableContainer component={Paper}>
        <Table sx={{ width: 980 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">City</StyledTableCell>
              <StyledTableCell align="left">zipcode</StyledTableCell>
              <StyledTableCell align="left">Company Name</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {myData.map((post) => {
              const { id, name, email, address, company } = post;
              return (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {name}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {email}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {address.city}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {address.zipcode}
                  </StyledTableCell>
                  <StyledTableCell align="left">{company.name}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Users;
