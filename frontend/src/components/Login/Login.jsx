import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useInput from "../../hooks/use-input";
import Copyright from "../../UI/Copyrights";
import "./Login.css";

const defaultTheme = createTheme();

export default function Login() {
  const adminToken = "admin verification";
  const userToken = "user verification";
  const navigate = useNavigate();
  const {
    enteredValue: enteredUsername,
    isValid: usernameIsValid,
    onChangeHandler: changeUsernameHandler,
    onBlurHandler: blurUsernameHandler,
  } = useInput((enteredUsername) => enteredUsername.trim().length > 0);

  const {
    enteredValue: enteredPassword,
    isValid: passwordIsValid,
    onChangeHandler: changePasswordHandler,
    onBlurHandler: blurPasswordHandler,
  } = useInput((enteredPassword) => enteredPassword.trim().length > 0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (enteredUsername.toLowerCase() === "admin") {
      localStorage.setItem("adminToken", adminToken);
      toast.success("Login successful!");
      navigate("/admin");
    } else if (enteredUsername.toLowerCase() === "user") {
      localStorage.setItem("userToken", userToken);
      toast.success("Login successful!");
      return navigate("/");
    } else return;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container className="login-wrapper" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          onClick={() => {
            navigate("/");
          }}
          className="login-image-wrapper"
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
          className="login-form-wrapper"
        >
          <Box
            className="login-form-box"
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                fullWidth
                margin="normal"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={enteredUsername}
                onChange={changeUsernameHandler}
                onBlur={blurUsernameHandler}
              />
              <TextField
                fullWidth
                margin="normal"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={enteredPassword}
                onChange={changePasswordHandler}
                onBlur={blurPasswordHandler}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!usernameIsValid || !passwordIsValid}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
