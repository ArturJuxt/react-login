import React from "react";
import { Card, Button } from "react-bootstrap";
import "./News.scss";
import imgHtml from "../../img/html.jpg";
import imgReact from "../../img/react.jpeg";

const news = [
  {
    id: 1,
    title: "Html",
    img: imgHtml,
    description:
      "HTML — a standardized markup language for documents on the World Wide Web. Most web pages contain HTML markup descriptions. HTML is interpreted by browsers; the formatted text obtained as a result of interpretation is displayed on the screen of a computer monitor or mobile device"
  },
  {
    id: 2,
    title: "React",
    img: imgReact,
    description:
      "React — React is an open source JavaScript library for developing user interfaces. React is developed and maintained by Facebook, Instagram and the community of individual developers and corporations. React can be used to develop single page and mobile apps"
  },
];

function News() {
  return (
    <div className="news">
      {news.map((n) => (
        <Card style={{ width: "60rem", margin: "15px" }} key={n.id}>
          <Card.Img variant="top" src={n.img} />
          <Card.Body>
            <Card.Title>{n.title}</Card.Title>
            <Card.Text>{n.description}</Card.Text>
            <Button variant="primary">More</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default News;
