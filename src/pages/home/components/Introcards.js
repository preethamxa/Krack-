import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import KrackedUkulele from "../../../img/home/Introcards/KrackedUkulele.png";
import KrackedGuitar from "../../../img/home/Introcards/KrackedGuitar.png";
import UserSignup from "../../../img/home/Introcards/UserSignup.png";
import DailyUsers from "../../../img/home/Introcards/DailyUsers.png";
const CounterCards = () => {
  const paperStyle = {
    padding: 20,
    height: 273,
    // width: 252,
    margin: "20px auto",
    backgroundColor: "black",
    color: "#E27C19",
  };
  return (
    <>
      <div style={{width: '90%', margin: "auto"}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={10} style={paperStyle}>
            <div>
              <img src={KrackedUkulele} alt="icon" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
              <Typography align="center" style={{color: "white", fontWeight: '900', fontSize: 30}}><CountUp
                end={18260}
                duration={5}
                separator=","
                suffix="+"
              /></Typography>
              <Typography align="center" style={{fontWeight: '900', fontSize: 20}}>Kracked Ukulele</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={10} style={paperStyle}>
            <div>
              <img src={KrackedGuitar} alt="icon" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
              <Typography align="center" style={{color: "white",fontWeight: '900', fontSize: 30}}><CountUp
                end={7000}
                duration={5}
                separator=","
                suffix="+"
              /></Typography>
              <Typography align="center" style={{fontWeight: '900', fontSize: 20 }}>Kracked Guitar</Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={10} style={paperStyle}>
            <div>
              <img src={UserSignup} alt="icon" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
              <Typography align="center" style={{color: "white", fontWeight: '900', fontSize: 30}}><CountUp
                end={36620}
                duration={5}
                separator=","
                suffix="+"
              /></Typography>
              <Typography align="center" style={{ fontWeight: '900', fontSize: 20 }}>User Signup</Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={10} style={paperStyle}>
            <div>
              <img src={DailyUsers} alt="icon" style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}/>
              <Typography align="center" style={{color: "white", fontWeight: '900', fontSize: 30}}><CountUp
                end={6600}
                duration={5}
                separator=","
                suffix="+"
              /></Typography>
              <Typography align="center" style={{ fontWeight: '900', fontSize: 20 }}>Daily Users</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </>
  );
};

export default CounterCards;
