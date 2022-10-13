import { makeStyles } from "@material-ui/core/styles";

export const headerStyles = makeStyles((theme) => ({
  appbar: {
    background: "#1B1B1B !important",
    padding: "1rem",
  },

  logincta: {
    background: "#EE7629",
    borderRadius: 0,
    textTransform: "none",
    color: "white",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },

  desktopNavbar: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  mobileNavbar: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    display: "inline",
    marginLeft: "16px",
  },

  list: {
    display: "flex",
    margin: "0",
    listStyleType: "none",
  },

  navItem: {
    marginLeft: "1rem",
  },
}));
