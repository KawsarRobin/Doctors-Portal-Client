import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    const user = { email };
    e.preventDefault();

    fetch('http://intense-cove-70929.herokuapp.com/users/makeAdmin', {
      method: 'PUT',
      headers: {
        authorization: `bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount <= 1) {
          setSuccess(true);
        }
      });
  };

  return (
    <div>
      <h2>Make An admin</h2>
      <form onSubmit={handleOnSubmit}>
        <TextField
          onBlur={handleOnBlur}
          variant="standard"
          label="Email"
          type="email"
          style={{ width: '50%' }}
        />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
      {success && (
        <Alert severity="success">Congrats! Admin Added successfully</Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
