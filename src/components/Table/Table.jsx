import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useModal } from "../../contexts/ModalContext";
import AddModal from "../../modal/AddModal";

function createData(
  date,
  time,
  shopName,
  area,
  comany,
  visitBy,
  download,
  remove
) {
  return { date, time, shopName, area, comany, visitBy, download, remove };
}

const rows = [
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
  createData(
    "2 March 2023",
    "12:20",
    "Name",
    "Area",
    "Name",
    "Visitor Name",
    "Doc",
    "delete"
  ),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const { isOpen, setIsOpen } = useModal();
  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Shop Name</TableCell>
              <TableCell align="left">Area</TableCell>
              <TableCell align="left">Company</TableCell>
              <TableCell align="left">Visit By</TableCell>
              <TableCell align="left">Download</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">{row.shopName}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.area}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  {row.comany}
                </TableCell>
                <TableCell align="left" className="Details">
                  {row.comany}
                </TableCell>
                <TableCell
                  onClick={() => setIsOpen(true)}
                  align="left"
                  className="Details"
                >
                  {row.download}
                </TableCell>
                <TableCell
                  onClick={() => setIsOpen(true)}
                  align="left"
                  className="Details"
                >
                  {row.download}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
