import { makeStyles } from "@material-ui/core";

export const courseListStyles = makeStyles((theme) => ({
  infoContainer: {
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    display: "flex",
    flexDirection: "column",
  },

  videoPlayerContainer: {
    [theme.breakpoints.up("md")]: {
      flexBasis: "60%",
    },
    flexBasis: "100%",
  },

  infoCard: {
    [theme.breakpoints.up("md")]: {
      flexBasis: "40%",
    },
    flexBasis: "100%",
  },

  otherCoursesContainer: {
    background: "#202020",
    color: "white",
  },

  heading: {
    fontSize: "2rem",
    textAlign: "center",
  },
}));
