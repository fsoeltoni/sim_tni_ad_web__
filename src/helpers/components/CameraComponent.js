import React, { forwardRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide
} from "@material-ui/core";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CameraComponent = ({}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Aktifkan Kamera
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ambil Foto
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CameraComponent;
