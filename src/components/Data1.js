import bookingInfo from './Booking'

const Bookinginfo = JSON.parse(localStorage.getItem(bookingInfo));
if (Bookinginfo) {
  console.log(Bookinginfo.lab);
  console.log(Bookinginfo.day);
  console.log(Bookinginfo.slot);
}

