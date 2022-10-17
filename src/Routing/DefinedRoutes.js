import React from "react";
import { Route, Routes } from "react-router-dom";
import CourseList from "../pages/CourseList/components/CourseList";
import Home from "../pages/home/Home";

export default function DefinedRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<CourseList />} />
      </Routes>
    </div>
  );
}
