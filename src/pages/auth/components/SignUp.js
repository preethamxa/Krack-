import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import sign_in_img from "../img/sign_in_img.png";
import { Link } from "react-router-dom";
import "../style/authstyle.css";
const SignUp = () => {
  const paperStyle = {
    padding: 20,
    width: 350,
    margin: "20px auto",
    backgroundColor: "#232323",
    color: "white",
    align: "center",
    marginTop: 90,
  };
  const btnstyle = { margin: "8px 0", backgroundColor: "#EE7629", color: "white", marginTop: 20, height: 59 };

  return (
    <Grid container style={{ backgroundColor: "black" }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" style={{ color: "#EE7629", fontWeight: "Bold" }}>
              X
            </Link>
            <div>
              <h3>Create account</h3>
              <h6 style={{ color: "#A9A8A8" }}>
                Or{" "}
                <Link to="/signin" style={{ color: "#EE7629" }}>
                  Login to your account
                </Link>{" "}
              </h6>
            </div>
            <img src={sign_in_img} style={{ width: 100 }} />
          </div>
        </Grid>

        <div>
          <Typography>Your name</Typography>
          <TextField id="placeholdinput" variant="outlined" placeholder="First & last name" color="primary" fullWidth required />
          <Typography>Email</Typography>
          <TextField id="placeholdinput" variant="outlined" placeholder="Your email id" fullWidth required />
          <Typography>Phone number</Typography>
          <TextField id="placeholdinput" variant="outlined" placeholder="0000000000" fullWidth required />
        </div>
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
          Sign up
        </Button>
      </Paper>
    </Grid>
  );
};

export default SignUp;
