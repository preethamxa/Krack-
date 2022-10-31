import { Button, Card, CardContent, CardHeader, LinearProgress } from "@material-ui/core";
import React from "react";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import ukelele from "../../../img/allcourses/uku.png";
import { RemoveCircleRounded } from "@material-ui/icons";

export default function CourseCard(props) {
  const [addToCart, setAddToCart] = React.useState(false);

  return (
    <div>
      <Card elevation={2} style={{ border: "1px solid lightgrey", padding: "0 !important" }}>
        <CardContent style={{ padding: "0px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <img src={ukelele} style={{ width: "100%", height: 220, objectFit: "cover" }} />
          </div>
          <div>
            {props.purchased ? (
              <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 0.5rem 0.75rem 0.5rem" }}>
                <div style={{ flexBasis: "55%" }}>
                  {/* <div> */}
                  <div>
                    <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                    <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                    <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                    <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                    <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                  </div>
                  <div
                    style={{
                      width: "80%",
                      marginTop: "0.75rem",
                    }}
                  >
                    <LinearProgress variant="determinate" value={50} />
                  </div>
                </div>
                {/* <div style={{ flexBasis: "45%", marginLeft: "auto" }}> */}
                <div>
                  <Button
                    size="small"
                    style={{
                      textTransform: "capitalize",
                      background: "#EE7027",
                      borderRadius: 0,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Continue learning
                  </Button>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0px 0.5rem 0 0.5rem" }}>
                <div>
                  <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                  <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                  <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                  <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                  <StarBorderRoundedIcon style={{ color: "#EE7027" }} />
                </div>
                <div style={{ display: "flex", transform: "translateY(5px)" }}>
                  {addToCart ? <RemoveCircleRounded style={{ color: "#EE7027", cursor: "pointer" }} onClick={() => setAddToCart(!addToCart)} /> : <AddBoxRoundedIcon style={{ color: "#EE7027", cursor: "pointer" }} onClick={() => setAddToCart(!addToCart)} />}
                  <p style={{ fontWeight: "bold", marginLeft: "0.7rem" }}>Rs. 49</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
