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
import google from "../img/icon_button.png";

import sign_in_img from "../img/sign_in_img.png";

const SignIn = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 350,
    margin: "20px auto",
    backgroundColor: "#232323",
    color: "white",
    align: "center"
  };
  const btnstyle = { margin: "8px 0" ,backgroundColor:"#EE7629", color:"white"};
  const googlestyle = { color: "white", backgroundColor: "black" };
  const imagesize = { width: 30 ,marginbottom: '1rem', paddingRight: 20};
  return (
    <Grid container style={{backgroundColor:"black"}}>
      <Paper elevation={10} style={paperStyle}>
      <Link to="#" style={{color:"#EE7629", fontWeight: "Bold"}}>X</Link>
        <Grid>
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <div>
              <h2>Sign In</h2>
              <h4 style={{color: "#A9A8A8"}}>
                Or <Link to="#" style={{color: "#EE7629"}}>Create an account</Link>{" "}
              </h4>
            </div>
            <img src={sign_in_img} style={{ width: 100 }} />
          </div>
        </Grid>
        <div style={{paddingTop:20, paddingBottom: 20}}>
        Phone number</div>
        <TextField placeholder="0000000000" id="outlined-basic" variant="outlined" fullWidth required style={{color:"grey"}} />
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
        <Typography align="center" style={{padding:20}}> Or continue with</Typography>
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

export default SignIn;