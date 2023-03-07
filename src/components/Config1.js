import React from "react";
import { Grid, Paper, Typography } from "@mui/material";



const labsAvailability = [
  {
    labName: "Lab 1",
    availability: {
      Monday: ["9:00", "10:30", "14:00", "16:00"],
      Tuesday: ["9:00", "10:30", "14:00", "16:00"],
      Wednesday: ["9:00", "10:30", "14:00", "16:00"],
      Thursday: ["9:00", "10:30", "14:00", "16:00"],
      Friday: ["9:00", "10:30", "14:00", "16:00"],
    },
  },
  {
    labName: "Lab 2",
    availability: {
      Monday: ["11:00", "12:30", "15:00", "17:00"],
      Tuesday: ["11:00", "12:30", "15:00", "17:00"],
      Wednesday: ["11:00", "12:30", "15:00", "17:00"],
      Thursday: ["11:00", "12:30", "15:00", "17:00"],
      Friday: ["11:00", "12:30", "15:00", "17:00"],
    },
  },
];

function Labs() {
  return (
    <Grid container spacing={3}>
      {labsAvailability.map((lab) => (
        <Grid item xs={12} sm={6} key={lab.labName}>
          <Paper elevation={3}>
            <Typography variant="h5" component="h3">
              {lab.labName}
            </Typography>
            <Typography component="ul">
              {Object.entries(lab.availability).map(([day, slots]) => (
                <li key={day}>
                  <strong>{day}:</strong>{" "}
                  {slots.map((slot) => (
                    <span key={slot}>{slot} </span>
                  ))}
                </li>
              ))}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
export default Labs;