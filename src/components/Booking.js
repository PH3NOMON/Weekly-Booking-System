import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import useState from 'react'


  function BookingForm() {
  const [selectedLab, setSelectedLab] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleLabChange = (event) => {
    setSelectedLab(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    
  const handleBookingSubmit = () => {
    const bookingInfo = {
      lab: selectedLab,
      day: selectedDay,
      slot: selectedSlot,
    };
    localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
    // TODO: handle successful booking submission
  };

  return (
    <form onSubmit={handleBookingSubmit}>
      {/* ... */}
      <Button type="submit" variant="contained" color="primary">
        Book Now
      </Button>
    </form>
  );
   }
  }


export default BookingForm;


//Define the BookingForm component that will allow users to book a session for a selected lab and time slot. The BookingForm will display a drop-down list of available labs, 
    //a date picker to select a day of the week, and a time slot picker to select a 1.5 hour time slot from the available slots for the selected lab and day.