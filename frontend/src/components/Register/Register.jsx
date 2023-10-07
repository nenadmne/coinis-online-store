import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../UI/Copyrights";
import "./Register.css";
import signUp from "../../api/apiCalls/signUp";

const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();

  const {
    enteredValue: enteredName,
    isValid: nameIsValid,
    onChangeHandler: changeNameHandler,
    onBlurHandler: blurNameHandler,
  } = useInput((enteredName) => enteredName.trim().length > 0);

  const {
    enteredValue: enteredUsername,
    isValid: usernameIsValid,
    onChangeHandler: changeUsernameHandler,
    onBlurHandler: blurUsernameHandler,
  } = useInput((enteredUsername) => enteredUsername.trim().length > 0);

  const {
    enteredValue: enteredEmail,
    isValid: emailIsValid,
    onChangeHandler: changeEmailHandler,
    onBlurHandler: blurEmailHandler,
  } = useInput((enteredEmail) => enteredEmail.trim().length > 0);

  const {
    enteredValue: enteredPassword,
    isValid: passwordIsValid,
    onChangeHandler: changePasswordHandler,
    onBlurHandler: blurPasswordHandler,
  } = useInput((enteredPassword) => enteredPassword.trim().length > 0);

  const {
    enteredValue: enteredRepeatedPassword,
    onChangeHandler: changeRepeatedPasswordHandler,
    onBlurHandler: blurRepeatedPasswordHandler,
  } = useInput(
    (enteredRepeatedPassword) => enteredRepeatedPassword.trim().length > 0
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: enteredName,
      username: enteredUsername,
      password: enteredPassword,
    };
    await signUp(data);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: "100vh" }} className="register-wrapper">
        <CssBaseline />
        <Grid
          onClick={() => {
            navigate("/");
          }}
          className="register-image-wrapper"
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://i0.wp.com/jerriwilliams.com/wp-content/uploads/2023/05/11-Ep-287-Chris-Tarbell-Twitter-Post.png?fit=1600%2C900&ssl=1)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          className="register-form-wrapper"
        >
          <ThemeProvider theme={defaultTheme}>
            <Container maxWidth="xs">
              <CssBaseline />
              <Box
                className="register-form-box"
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box
                  className="form-box"
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid className="input-grid" item xs={12}>
                      <TextField
                        fullWidth
                        name="firstName"
                        label="Name"
                        value={enteredName}
                        onChange={changeNameHandler}
                        onBlur={blurNameHandler}
                        autoFocus
                      />
                    </Grid>
                    <Grid className="input-grid" item xs={12}>
                      <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value={enteredUsername}
                        onChange={changeUsernameHandler}
                        onBlur={blurUsernameHandler}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        value={enteredEmail}
                        onChange={changeEmailHandler}
                        onBlur={blurEmailHandler}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Country" name="country" />
                    </Grid>
                    <Grid className="input-grid" item xs={12}>
                      <TextField
                        fullWidth
                        aria-invalid="true"
                        name="password"
                        label="Password"
                        type="password"
                        value={enteredPassword}
                        onChange={changePasswordHandler}
                        onBlur={blurPasswordHandler}
                      />
                    </Grid>
                    <Grid className="input-grid" item xs={12}>
                      <TextField
                        fullWidth
                        name="confirm-password"
                        label="Confirm password"
                        type="password"
                        value={enteredRepeatedPassword}
                        onChange={changeRepeatedPasswordHandler}
                        onBlur={blurRepeatedPasswordHandler}
                      />
                    </Grid>
                    <Grid item xs={12}></Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={
                      !nameIsValid ||
                      !usernameIsValid ||
                      !passwordIsValid ||
                      enteredPassword !== enteredRepeatedPassword
                    }
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
