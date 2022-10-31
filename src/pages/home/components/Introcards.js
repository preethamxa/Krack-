import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import KrackedUkulele from "../../../img/home/Introcards/KrackedUkulele.png";
import KrackedGuitar from "../../../img/home/Introcards/KrackedGuitar.png";
import UserSignup from "../../../img/home/Introcards/UserSignup.png";
import DailyUsers from "../../../img/home/Introcards/DailyUsers.png";
import { introCardStyles } from "../style/main";
const Introcards = () => {
  const paperStyle = {
    padding: 20,
    height: 350,
    maxWidth: 240,
    margin: "10px auto",
    backgroundColor: "black",
    color: "#E27C19",
  };

  const classes = introCardStyles();

  return (
    <>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6} md={3}>
            <Paper elevation={10} className={classes.paperStyles}>
              <div>
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                  <img src={KrackedUkulele} alt="icon" className={classes.cardImg} />
                </div>

                <Typography align="center" className={classes.counterText}>
                  <CountUp end={18260} duration={5} separator="," suffix="+" />
                </Typography>
                <Typography align="center" className={classes.instrumentText}>
                  Kracked
                  <br /> Ukulele
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Paper elevation={10} className={classes.paperStyles}>
              <div>
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                  <img src={KrackedGuitar} alt="icon" className={classes.cardImg} />
                </div>
                <Typography
                  align="center"
                  className={classes.counterText}
                  style={{
                    transform: "translateY(-7px)",
                  }}
                >
                  <CountUp end={7000} duration={5} separator="," suffix="+" />
                </Typography>
                <Typography
                  align="center"
                  className={classes.instrumentText}
                  style={{
                    transform: "translateY(-7px)",
                  }}
                >
                  Kracked
                  <br /> Guitar
                </Typography>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Paper elevation={10} className={classes.paperStyles}>
              <div>
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                  <img src={UserSignup} alt="icon" className={classes.cardImg} />
                </div>
                {/* <img src={UserSignup} alt="icon" className={classes.cardImg} /> */}
                <Typography align="center" className={classes.counterText}>
                  <CountUp end={36620} duration={5} separator="," suffix="+" />
                </Typography>
                <Typography align="center" className={classes.instrumentText}>
                  User <br />
                  Signup
                </Typography>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Paper elevation={10} className={classes.paperStyles}>
              <div>
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                  <img src={DailyUsers} alt="icon" className={classes.cardImg} />
                </div>
                {/* <img src={DailyUsers} alt="icon" className={classes.cardImg} /> */}
                <Typography align="center" className={classes.counterText}>
                  <CountUp end={6600} duration={5} separator="," suffix="+" />
                </Typography>
                <Typography align="center" className={classes.instrumentText}>
                  Daily
                  <br /> Users
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Introcards;
