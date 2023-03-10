import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    padding: '15px',
    fontWeight: 'bold',
    backgroundColor: '',
    fontStyle: 'italic',
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.grey[400],
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const labsAvailability = [
  {
    labName: "Lab 1",
    availability: {
      Monday: ["9:00 ", "10:30 ", "14:00 ", "16:00 "],
      Tuesday: ["9:00 ", "10:30 ", "14:00 ", "16:00 "],
      Wednesday: ["9:00 ", "10:30 ", "14:00 ", "16:00 "],
      Thursday: ["9:00 ", "10:30 ", "14:00 ", "16:00 "],
      Friday: ["9:00 ", "10:30 ", "14:00 ", "16:00 "],
    },
  },
  {
    labName: "Lab 2",
    availability: {
      Monday: ["11:00 ", "12:30 ", "15:00 ", "17:00 "],
      Tuesday: ["11:00 ", "12:30 ", "15:00 ", "17:00 "],
      Wednesday: ["11:00 ", "12:30 ", "15:00 ", "17:00 "],
      Thursday: ["11:00 ", "12:30 ", "15:00 ", "17:00 "],
      Friday: ["11:00 ", "12:30 ", "15:00 ", "17:00 "],
    },
  },
];

 const  Labs = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSlotClick = (day, slot) => {
    setSelectedDay(day);
    setSelectedSlots([slot]);
  };

  const isSlotSelected = (day, slot) => {
    return selectedDay === day && selectedSlots.includes(slot);
  };

 

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="labs availability table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Lab</StyledTableCell>
            {daysOfWeek.map((day) => (
              <StyledTableCell align="center" key={day}>
                {day}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {labsAvailability.map((lab) => (
            <StyledTableRow key={lab.labName}>
              <StyledTableCell component="th" scope="row">
                {lab.labName}
              </StyledTableCell>
              {daysOfWeek.map((day) => (
                <StyledTableCell key={`${lab.labName}-${day}`} align="center">
                  {lab.availability[day].map((slot) => (
                    <span
                      key={slot}
                      className={isSlotSelected(day, slot) ? "selected" : ""}
                      onClick={() => handleSlotClick(day, slot)}
                    >
                      {slot}
                    </span>
                  ))}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
}

export default Labs;
