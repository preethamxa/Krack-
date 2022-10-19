import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import google from "../icon_button.png";
import sign_in_img from "../sign_in_img.png";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
    backgroundColor: "#232323",
    color: "white"
  };
  const btnstyle = { margin: "8px 0" };
  const googlestyle = { color: "white", backgroundColor: "black" };
  const imagesize = { width: 50 };
  return (
    <Grid container>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2>Sign In</h2>
              <h4>
                Or <Link to="#">Create an account</Link>{" "}
              </h4>
            </div>
            <img src={sign_in_img} style={{ width: 100 }} />
          </div>
        </Grid>
        Phone number
        <TextField placeholder="0000000000" fullWidth required />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember Me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography> Or continue with</Typography>
        <Button
          varient="contained"
          style={googlestyle}
          onClick={() => {
            console.log("Google button clicked");
          }}
          fullWidth
        >
          <img src={google} alt="logo" style={imagesize} />
          Sign in with Google
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
