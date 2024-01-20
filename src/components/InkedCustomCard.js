import Card from "react-bootstrap/Card";
import CardStyle from "../stylesheets/Card.css"
import { useNavigate } from "react-router-dom";


import React from "react";

export default function InkedCustomCard(props) {


  const navigate = useNavigate();

  const handleClick = () => {

    if (props.onClick) {
      props.onClick();
    }

    if (props.navigateTo) {
      navigate(props.navigateTo);
    }
  };

  return (
    <>
      <Card className="tattoo-card"
        style={{
          width: props.cardWidth,
          height: props.cardHeight,
          margin: props.cardMargin,
          marginLeft: props.cardLeftMargin,
          cursor: 'pointer'
        }}
        onClick={handleClick}
        
      >
        <Card.Img
          variant="top"
          src={props.img}
          style={{ height: props.imgHeight, objectFit: "cover" }}
        />
        <Card.Body>
          {props.title ? (<Card.Title>{props.title}</Card.Title>) : null}
          {props.text ? (<Card.Text style={{ fontSize: props.fontSize }}>{props.text}</Card.Text>):null}
          {props.children ? (
            <>
            {props.children}
            </>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
}
