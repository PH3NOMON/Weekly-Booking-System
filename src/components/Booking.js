import { Button, TextField, Checkbox, FormControl, FormControlLabel, Grid, InputLabel } from "@mui/material";
import { useState } from "react";

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import MenuItem from '@mui/material/MenuList';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    background: (props) =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
};

function MyButtonRaw(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
}

MyButtonRaw.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
};

const MyButton = withStyles(styles)(MyButtonRaw);


const theme = createTheme();

function BookingForm() {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLab, setSelectedLab] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");








  const handleBookingSubmit = () => {
    const bookingInfo = {
      names: firstName + lastName,
      emails: email,
      descp: description,
      lab: selectedLab,
      day: selectedDay,
      time: selectedSlot,

    };
    localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
    // TODO: handle successful booking submission

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{

            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '3px solid',
            borderColor: 'primary.main',
            borderRadius: '12px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            padding: '16px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <BookmarkOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Booking
          </Typography>
          <Box component="form" noValidate onSubmit={handleBookingSubmit} sx={{ m: 1, minWidth: 120, }}>
            <Grid container spacing={3}>
              <Grid item xs={15} sm={6}>
                <TextField
                  id="first-name"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </Grid>


              <Grid item xs={12} sm={8}>

                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  rows={4}
                  variant="outlined"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={8}>
                <FormControl fullWidth>

                  <InputLabel >Day</InputLabel>
                  <Select
                    id="Day"
                    value={selectedDay}
                    variant="outlined"
                    label="Day"
                    onChange={(event) => setSelectedDay(event.target.value)}
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Sunday</MenuItem>
                    <MenuItem value={20}>Monday</MenuItem>
                    <MenuItem value={30}>Tuesday</MenuItem>
                    <MenuItem value={30}>Wednesday</MenuItem>
                    <MenuItem value={30}>Thursday</MenuItem>
                    <MenuItem value={30}>Friday</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>

                <TextField
                  id="Time"
                  label="Time"

                  variant="outlined"
                  value={selectedSlot}
                  onChange={(event) => setSelectedSlot(event.target.value)}
                  required
                />
              </Grid>


              <Grid item xs={12} sm={8}>

                <TextField
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControlLabel control={<Checkbox />} label="Lab 1" onChange={(event) => setSelectedLab(event.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel control={<Checkbox />} label="Lab 2" onChange={(event) => setSelectedLab(event.target.value)} />
              </Grid>

            </Grid>


            <React.Fragment>
              <MyButton type="submit"  color="blue">Book now</MyButton>
            </React.Fragment>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>

  );





}





export default BookingForm;


//Define the BookingForm component that will allow users to book a session for a selected lab and time slot. The BookingForm will display a drop-down list of available labs,
    //a date picker to select a day of the week, and a time slot picker to select a 1.5 hour time slot from the available slots for the selected lab and day.