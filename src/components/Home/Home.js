import { Button } from "@mui/material";
import React, { useState } from "react";
import Modal from "../Modal";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>This page is displaying a popin</h1>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Just click me already
      </Button>
      <Modal open={open} onClose={handleClose} />
    </div>
  );
};

export default Home;
