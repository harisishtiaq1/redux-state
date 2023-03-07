import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getBooks } from "./Slice/UsersSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "brown",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border:'2px dashed black',

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
function Users() {
  const { userBooks, message } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks()).unwrap();
  });
  return (
    <>
      {message !== "" && <h2>{message}</h2>}
      <TableContainer component={Paper} sx={{maxHeight:'500px'}}>
        <Table aria-label="simple table" stickyHeader>
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
            {userBooks &&
              userBooks.map((post) => {
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
                    <StyledTableCell align="left">
                      {company.name}
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

export default Users;
