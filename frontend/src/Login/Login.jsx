import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, TextField, Button, Alert, AlertTitle, Typography, CardHeader } from "@mui/material";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const FormContainer = styled(Box)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "20px 0;"

}));

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userID', response.data.userID); // Save the userID
      onLogin();
      navigate('/play');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('User not found. Please register first.');
      } else {
        setError(error.response?.data.message || 'Error logging in');
      }
    }
  };
  

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to the Register page
  };

  return (
  <React.Fragment>
    <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
    >

    <Card variant="outlined" sx={{ maxWidth: 450, margin: "20px" }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">Login</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                sx={{ marginBottom: "10px", width: "100%" }}
              />
              <TextField
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                sx={{ width: "100%" }}
              />
              <ButtonContainer>
                <Button variant="contained" type="submit" sx={{ marginRight: "10px"}}>Login</Button>
                <Button variant="outlined" type="button" onClick={handleRegisterRedirect}>
                  Register
                </Button>
              </ButtonContainer>
              {error && <Alert severity="error"><AlertTitle>Error</AlertTitle>{error}</Alert>}
            </form>
        </CardContent>
    </Card>

    </Grid>
</React.Fragment>
  );
};

export default Login;
