import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCourses from "../pages/all_courses/components/AllCourses";
import Courseview from "../pages/CourseList/components/CourseList";
import Signin from "../pages/auth/components/SignIn"
import SignUp from "../pages/auth/components/SignUp"

import Home from "../pages/home/Home";

export default function DefinedRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courseview" element={<Courseview />} />
        <Route path="allcourses" element={<AllCourses />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
