import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useModal } from "../contexts/ModalContext";
import { UilTrashAlt, UilPlus } from "@iconscout/react-unicons";
import { TextField } from "@mui/material";
import DatePicker from "../components/DatePicker/DatePicker";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "40%",

  flexDirection: "column",
  justifyContent: "space-between",
  transform: "translate(-50%, -50%)",
  minWidth: "280px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 5,
  gap: "30px",
  p: 4,
};

export default function AddModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setdate] = React.useState({});
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <Button
        onClick={() => setIsOpen(true)}
        className="userpage-filter-container"
        variant="contained"
        startIcon={<UilPlus />}
      >
        Add Company
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Box sx={style}>
            <h1 style={{ textAlign: "center", marginBottom: 20 }}>
              Add Company
            </h1>
            <Box
              style={{
                flexWrap: "wrap",
                display: "flex",
                marginBottom: 20,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <DatePicker />

              <TextField
                placeholder="Please Eter Comany Name"
                id="outlined-basic"
                label="Comany"
                variant="outlined"
              />
              <TextField
                placeholder="Please Enter Area"
                id="outlined-basic"
                label="Area"
                variant="outlined"
              />
            </Box>
            <Box
              style={{
                flexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                marginBottom: 20,
                gap: 10,
              }}
            >
              <TextField
                placeholder="Please Enter Shop Name"
                id="outlined-basic"
                label="Shop"
                variant="outlined"
              />
              <TextField
                placeholder="Visited by"
                id="outlined-basic"
                label="Visited"
                variant="outlined"
              />
              <TextField
                placeholder="Please Eter cooaay ame"
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <Button variant="contained" onClick={() => handleClose()}>
                Ok
              </Button>
              <Button onClick={() => handleClose()} variant="outlined">
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
