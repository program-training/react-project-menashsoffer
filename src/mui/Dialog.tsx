import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [currentButton, setCurrentButton] = React.useState(1);

  const handleClickOpen = () => {
    setCurrentButton(0);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentButton(1);
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        sx={{ color: currentButton === 0 ? "#1976d2" : " default" }}
        onClick={handleClickOpen}
      >
        <AddCircleOutlineRoundedIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent sx={{ width: "350px" }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project`s name"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Create</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
