import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useModal } from "../contexts/ModalContext";
import { UilTrashAlt } from "@iconscout/react-unicons";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DeleteModal = () => {
  const { isOpen, setIsOpen } = useModal();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Are you sure!!!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Delete this Company
          </Typography>
          <Box
            sx={{ mt: 4 }}
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Button
              variant="contained"
              onClick={() => handleClose()}
              startIcon={<UilTrashAlt />}
            >
              Delete
            </Button>
            <Button onClick={() => handleClose()} variant="outlined">
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteModal;
