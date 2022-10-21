import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import ukulele from "../../../img/home/HomeMasonry/Ukulele.png";

export default function courseCard() {
  const cardRoot = {
    padding: "0px !important",
  };
  return (
    <div>
      <Card elevation={2} style={{ border: "1px solid lightgrey", padding: "0 !important" }}>
        <CardContent style={{ padding: "0px" }}>
          <div>
            <img src={ukulele} style={{ width: "100%" }} />
          </div>
          <div
            style={{
              margin: "0.5rem 1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
              <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
              <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
              <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
              <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
            </div>
            <div style={{ display: "flex", transform: "translateY(5px)" }}>
              <AddBoxRoundedIcon style={{ color: "#EE7027" }} />
              <p style={{ fontWeight: "bold", marginLeft: "0.7rem" }}>Rs. 49</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
