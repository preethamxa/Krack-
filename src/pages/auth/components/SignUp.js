import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import sign_in_img from "../img/sign_in_img.png";

const SignUp = () => {
    const paperStyle = {
        padding: 20,
        height: "60vh",
        width: 350,
        margin: "20px auto",
        backgroundColor: "#232323",
        color: "white",
        align: "center"
      };
      const btnstyle = { margin: "8px 0" ,backgroundColor:"#EE7629", color:"white", marginTop:20, height: 59};

    return(
        <Grid container style={{backgroundColor:"black"}}>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                <Link to="#" style={{color:"#EE7629", fontWeight: "Bold"}}>X</Link>
                <div>
              <h2>Create account</h2>
              <h4 style={{color: "#A9A8A8"}}>
                Or <Link to="#" style={{color: "#EE7629"}}>Login to your account</Link>{" "}
              </h4>
            </div>
            <img src={sign_in_img} style={{ width: 100 }} />
            </div>
                </Grid>

                <div>
                    <Typography>Your name</Typography>
                    <TextField id="outlined-basic" variant="outlined" placeholder="First & last name" color="primary" fullWidth required />
                    <Typography>Email</Typography>
                    <TextField id="outlined-basic" variant="outlined" placeholder="Your email id" fullWidth required  />
                    <Typography>Phone number</Typography>
                    <TextField id="outlined-basic" variant="outlined" placeholder="0000000000" fullWidth required />
                </div>
                <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
            </Paper>
        </Grid>)
}

export default SignUp;