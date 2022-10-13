// import { AppBar } from "@mui/material";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import krackLogo from "../../../img/header/Krack-Learn-Musical-Instruments-online.png";

import React from "react";
import { headerStyles } from "../style/main";
import "../style/Head.css";

export default function Header() {
  const classes = headerStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Container className={classes.container}>
          <div>
            <img src={krackLogo} style={{ width: 150 }} />
          </div>
          <div className={classes.desktopNavbar}>
            <ul className={classes.list}>
              <li className={classes.navItem}>All courses</li>
              <li className={classes.navItem}>Notification</li>
              <li className={classes.navItem}>Tools</li>
              <li className={classes.navItem}>Live</li>
            </ul>
          </div>
          <div>
            <Button className={classes.logincta}>Login in/Sign up</Button>
            <div className={classes.mobileNavbar}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuRoundedIcon style={{ color: "white", fontSize: "2rem" }} />
              </Button>

              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>All courses</MenuItem>
                <MenuItem onClick={handleClose}>Notification</MenuItem>
                <MenuItem onClick={handleClose}>Tools</MenuItem>
                <MenuItem onClick={handleClose}>Live</MenuItem>
              </Menu>
            </div>
          </div>
        </Container>
      </AppBar>
    </div>
  );
}
