import { Container, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import AccountCard from "./components/AccountCard";
import AccountNavigation from "./components/AccountNavigation";
import play_logo from "../../img/my_account/play_logo.svg";
import { myAccountStyles } from "./style/main";

export default function MyAccount() {
  const classes = myAccountStyles();

  return (
    <div className={classes.componentContainer}>
      {/* <Container> */}
      <div className={classes.insideContainerComp}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={classes.container}>
            <h3 style={{ marginBottom: "0px" }}>My Account</h3>
            <h5 className={classes.enroll}>
              <img src={play_logo} style={{ marginRight: "0.7rem", width: "2rem" }} /> ENROLLED 27th Sep
            </h5>
          </div>
        </div>
        <AccountCard />
        <AccountNavigation />
      </div>
      {/* </Container> */}
    </div>
  );
}
