import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import Input from "./Input";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Auth = ({ setShowLogin }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  return (
    <Container component="main" maxWidth="xs">
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <Typography variant="h5" style={{ marginBottom: "4em" }}>
        .
      </Typography>
      <Paper
        className={classes.paper}
        elevation={3}
        style={{ background: "#585c61" }}
      >
        <Grid container justifyContent="flex-end">
          <Button onClick={() => setShowLogin(false)}>
            <HighlightOffIcon style={{ color: "#b7bfc9" }} />
          </Button>
        </Grid>
        <Typography variant="h5" className={classes.wordyy}>
          {isSignup ? "SIGN UP" : "WELCOME BACK"}
        </Typography>
        <Typography variant="h5" className={classes.word}>
          {isSignup
            ? "Create an account to continue"
            : "Login into your account"}
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Typography variant="h5" className={classes.word}>
              {isSignup ? "Email" : "Email or Username"}
            </Typography>
            <Input
              name="email or username"
              label="Email your email or username"
              type="text"
            />
            {isSignup && (
              <>
                <Typography variant="h5" className={classes.word}>
                  Username
                </Typography>
                <Input
                  name="Username"
                  label="Choose a preferred username"
                  type="text"
                />
              </>
            )}
            <Typography variant="h5" className={classes.word}>
              Password
            </Typography>
            <Input
              name="password"
              label={
                isSignup ? "Choose a strong password" : "Enter your password"
              }
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Continue" : "Login now"}
          </Button>
        </form>
        <Grid container justifyContent="flex-start">
          <Button onClick={switchMode}>
            {isSignup ? (
              <div className={classes.wordy}>
                Already have an account ?
                <span style={{ color: "#b7bfc9" }}> Login</span>
              </div>
            ) : (
              <div className={classes.wordy}>
                Not registered yet ?
                <span style={{ color: "#b7bfc9" }}> Register</span>
              </div>
            )}
            <ArrowForwardIcon style={{ fontSize: "1em", color: "#b7bfc9" }} />
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
