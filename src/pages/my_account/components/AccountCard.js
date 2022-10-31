import React from "react";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import profile_photo from "../../../img/my_account/profile_photo.png";
import { accountCardStyles } from "../style/main";

export default function AccountCard() {
  const classes = accountCardStyles();
  return (
    <div className={classes.headerContainer}>
      <div
        style={{
          background: "#EE7228",
        }}
      >
        <img src={profile_photo} />
      </div>
      <h3 className={classes.nameContainer}>Krishna Sharma</h3>
      <h3 className={classes.phoneNum}>+ 9686780108</h3>
      <Button size="small" className={classes.editBtn}>
        <EditIcon style={{ marginRight: "0.5rem", fontSize: "1rem" }} />
        Edit Profile
      </Button>
    </div>
  );
}
