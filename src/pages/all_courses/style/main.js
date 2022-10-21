import { makeStyles } from "@material-ui/core";

export const allCoursesStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
}));
