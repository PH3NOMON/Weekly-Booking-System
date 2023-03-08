import React from 'react';
import ReactDOM from 'react-dom/client';
import BookingForm from './components/Booking';
import Labs from './components/Labs';
import './components/Data1';
import BasicRating from './components/Rating';
import BasicModal from './components/Yourbooking';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Labs />
   <BookingForm />
   <BasicRating />
   <BasicModal />

   
  </React.StrictMode>
);

