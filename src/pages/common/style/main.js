import { makeStyles } from "@material-ui/core/styles";

export const headerStyles = makeStyles((theme) => ({
  appbar: {
    background: "#1B1B1B !important",
    [theme.breakpoints.down("md")]: {
      padding: "1rem 0px 1rem 1rem",
    },
    padding: "1rem",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
  },

  logoContainer: {
    alignSelf: "center",
  },

  logo: {
    [theme.breakpoints.down("md")]: {
      width: 100,
    },
    width: 150,
  },

  logincta: {
    background: "#EE7629",
    borderRadius: 0,
    textTransform: "none",
    color: "white",
    fontWeight: "bold",
  },

  btnRoot: {
    padding: "0px !important",
  },

  shoppingCartContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    display: "grid",
    placeContent: "center",
    marginLeft: "2rem",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: "0px !important",
  },

  desktopNavbar: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  mobileNavbar: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    display: "inline",
  },

  list: {
    display: "flex",
    margin: "0",
    listStyleType: "none",
  },

  navItem: {
    marginLeft: "1.5rem",
  },

  navItemBtn: {
    textTransform: "capitalize",
    color: "white",
  },
}));
