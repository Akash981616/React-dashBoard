import React from "react";
import "./DatePicker.css";
const DatePicker = (value) => {
  return (
    <input
      type="date"
      //   value={value} min="2005-01-01"
      max="2043-01-01"
    />
  );
};

export default DatePicker;
