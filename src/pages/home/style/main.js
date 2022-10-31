import { makeStyles } from "@material-ui/core";

export const introCardStyles = makeStyles((theme) => ({
  paperStyles: {
    padding: 20,
    height: 350,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    maxWidth: "90%",
    margin: "10px auto",
    backgroundColor: "black",
    color: "#E27C19",
  },

  cardImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

  counterText: {
    color: "white",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: 26,
    },
    fontSize: 32,
  },

  instrumentText: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
    fontSize: 24,
  },
}));

export const homeStyles = makeStyles((theme) => ({
  introCardsContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    width: "90%",
    margin: "auto",
  },
}));
