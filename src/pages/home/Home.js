import React from "react";
import "./style/homepage.css";
import "./style/mansory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appdownload from "./components/Appdownload.js";
import HomeMasonry from "./components/HomeMasonry.js";
import Introcards from "./components/Introcards.js";
import HomeCarousel from "./components/HomeCarousel";
import CourseCarousel from "./components/CourseCarousel";
import { homeStyles } from "./style/main";

export default function Home() {
  const classes = homeStyles();
  return (
    <div style={{ marginTop: "3rem" }}>
      <HomeCarousel />
      <div className={classes.introCardsContainer}>
        <Introcards />
      </div>

      <div
        style={{
          textAlign: "center",
          margin: "2rem 0px 4rem 0px",
        }}
      >
        <h3
          style={{
            fontSize: "1.8rem",
          }}
        >
          Courses
        </h3>
        <p
          style={{
            color: "grey",
            fontSize: "1.2rem",
          }}
        >
          12 unique courses, one platform. All that
          <br /> you need, krack has it guaranteed.
        </p>
      </div>

      <HomeMasonry />
      <div
        style={{
          margin: "2rem",
        }}
      >
        <CourseCarousel />
      </div>
    
    </div>
  );
}
