import { Grid } from "@material-ui/core";
import React from "react";
import Header from "../../common/components/Header";
import { allCoursesStyles } from "../style/main";
import CourseCard from "./CourseCard";

export default function AllCourses() {
  const classes = allCoursesStyles();
  return (
    <div>
      {/* <Header /> */}
      <div style={{ marginTop: "6rem", marginBottom: "1rem" }}>
        <div className={classes.gridContainer}>
          <h2
            style={{
              margin: "2rem 0px 2rem 0px",
              marginTop: "2rem",
            }}
          >
            All courses
          </h2>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <CourseCard purchased={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CourseCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CourseCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CourseCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CourseCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CourseCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CourseCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CourseCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CourseCard />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
