import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./style.css"; // Make sure to add your styles here

function Cards({ title, imgSrc, text }) {
  return (
    <Card
      className="text-center content-text shadow-md hover-shadow"
      style={{ width: "22rem", margin: "1rem", height: "25rem" }}
    >
      <Card.Body>
        <Image
          src={imgSrc}
          rounded
          className="mb-3"
          style={{ height: "150px" }}
        />
        <Card.Title style={{ fontWeight: "bold", padding: "15px" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ fontStyle: "italic" }}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;