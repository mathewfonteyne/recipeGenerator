import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export default function Recipe(props) {
  return (
    <div>
      {console.log(props.recipe)}
      <Card
        style={{
          width: "17rem",
        }}
        className="my-2"
      >
        <CardImg
          alt="Card image cap"
          src={props.recipe.image}
          style={{
            height: 200,
          }}
          top
          width="60%"
        />
        <CardBody>
          <CardTitle tag="h5">{props.recipe.title}</CardTitle>
          <CardText>{props.recipe.summary}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
