import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import moment from "moment";
import "moment/min/locales.min";
import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const Modal = ({ onClose, open }) => {
  const [focused, setFocused] = useState(false);
  const [date, setDate] = useState(moment());

  return (
    <Dialog
      onClose={onClose}
      maxWidth={false}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        This popin is displaying a datepicker
      </DialogTitle>
      <DialogContent style={{ width: "700px", height: "400px" }}>
        <div>Date I learned to split my code:</div>
        <SingleDatePicker
          date={date}
          onDateChange={setDate}
          focused={focused}
          onFocusChange={({ focused: isFocused }) => setFocused(isFocused)}
          id="your_unique_id"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close popin
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
