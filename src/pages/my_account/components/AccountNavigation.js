import { Divider, List, ListItem, ListItemIcon } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import { accountNavigationStyles, MyDivider } from "../style/main";

export default function AccountNavigation() {
  const classes = accountNavigationStyles();
  return (
    <div className={classes.listContainer}>
      <List>
        <MyDivider />
        <ListItem button>
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon />
          </ListItemIcon>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            Wishlist
            <ArrowForwardIosIcon style={{ color: "grey" }} />
          </div>
        </ListItem>
        <MyDivider />
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>{" "}
          Orders
        </ListItem>
        <MyDivider />
        <ListItem button>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>{" "}
          Setting
        </ListItem>
        <MyDivider />
        <ListItem button>
          <ListItemIcon>
            <ExitToAppOutlinedIcon />
          </ListItemIcon>{" "}
          Log out
        </ListItem>
        <MyDivider />
      </List>
    </div>
  );
}
