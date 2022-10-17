import { Card, CardContent, CardHeader, Container, Grid } from "@material-ui/core";
import React from "react";
import { courseListStyles } from "../style/main";

export default function CourseList() {
  const classes = courseListStyles();
  return (
    <>
      <Container style={{ marginTop: "5rem" }}>
        <h2 style={{ fontSize: "3rem", fontSize: "bold", margin: "1rem 0" }}>Guitar</h2>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <video src="https://www.youtube.com/watch?v=AjWfY7SnMBI&t=7s" controls autoplay loop muted width="100%" height="300px"></video>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <CardHeader title="Learn Guitar" style={{ textAlign: "center" }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div className={classes.otherCoursesContainer}>
          <h4 className={classes.heading}>Other Courses</h4>
          <div className={classes.courseCarouselContainer}></div>
        </div>
      </Container>
    </>
  );
}
