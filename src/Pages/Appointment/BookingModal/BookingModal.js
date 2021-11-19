import { Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const BookingModal = ({
  BookingOpen,
  handleModalClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time, price } = booking;
  const { user } = useAuth();

  const initialBookingInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: '',
  };
  const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);
  // console.log(bookingInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[field] = value;
    setBookingInfo(newBookingInfo);
    console.log(newBookingInfo);
  };

  const handleSubmit = (e) => {
    const appointment = {
      ...bookingInfo,
      time: time,
      price: price,
      ServiceName: name,
      date: date.toLocaleDateString(),
    };

    fetch(`https://intense-cove-70929.herokuapp.com/appointments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleModalClose();
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={BookingOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={BookingOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                disabled
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
              />
              <TextField
                name="patientName"
                onBlur={handleOnBlur}
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                defaultValue={user.displayName}
                size="small"
              />
              <TextField
                onBlur={handleOnBlur}
                name="email"
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                defaultValue={user.email}
                size="small"
              />
              <TextField
                onBlur={handleOnBlur}
                name="phone"
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                defaultValue="Your Phone"
                size="small"
              />
              <TextField
                disabled
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
              />
              <Button type="submit" variant="contained">
                Send
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
