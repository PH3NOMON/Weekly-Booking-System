import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
if (bookingInfo) {
  console.log(bookingInfo.lab);
  console.log(bookingInfo.day);
  console.log(bookingInfo.slot);
}
