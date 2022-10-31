import { Divider, makeStyles, withStyles } from "@material-ui/core";

export const MyDivider = withStyles({
  root: {
    background: "black",
  },
})(Divider);

export const myAccountStyles = makeStyles((theme) => ({
  componentContainer: {
    marginTop: "5rem",
  },

  insideContainerComp: {
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
    },
    width: "60%",
    margin: "auto",
    // background: "coral",
  },

  container: {
    width: "60%",
    paddingBottom: "0.5rem",
    marginBottom: "1rem",
    borderBottom: "1px solid lightgrey",
    display: "flex",
    // flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  enroll: {
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "0px ",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
  },
}));

export const accountCardStyles = makeStyles({
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    padding: "2rem",
  },

  nameContainer: {
    fontWeight: "300",
    marginTop: "1.5rem",
    fontSize: "1.5rem",
  },

  phoneNum: {
    fontWeight: "300",
    fontSize: "1.2rem",
  },

  editBtn: {
    background: "#EE7228 !important",
    color: "white",
    textTransform: "capitalize",
    width: "9rem",
    marginTop: "0.7rem",
  },
});

export const accountNavigationStyles = makeStyles((theme) => ({
  listContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    width: "50%",
    margin: "auto",
  },
}));
