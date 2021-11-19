import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState('');

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);

    fetch('https://intense-cove-70929.herokuapp.com/doctors', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess('Doctor Added successfully');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <h2>Add a doctor</h2>
      <form onSubmit={handleOnsubmit}>
        <TextField
          sx={{ width: '50%' }}
          label="Name"
          required
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />{' '}
        <br />
        <TextField
          sx={{ width: '50%' }}
          label="Email"
          type="email"
          required
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <br />
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          Upload
        </Button>
      </form>
      {success && <h5 style={{ color: 'green' }}>{success}</h5>}
    </div>
  );
};

export default AddDoctor;
