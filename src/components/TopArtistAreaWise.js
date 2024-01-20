import React, { useState } from "react";
import InkedCustomCard from "./InkedCustomCard";
import ArtistGallery from "./ArtistGallery";
import Button from 'react-bootstrap/Button';
import CustomerReview from './CustomerReviews'
import ArtistDetails from './ArtistDetails';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




//just for demo showcase


export default function TopArtistAreaWise({ artistData }) {

  const handleCardClick = () => {
   
  };
  
  return (
    <>
      
      <div className="container py-3">
        <Row>
          <Col xs={5}>
            <h1 style={{paddingBottom: "10px"}}>
              <span style={{ color: "red" }}>Top</span> Artists From Your Area
            </h1>
          </Col>
          <Col>
          <DropdownButton style={{paddingTop: "10px", fontFamily: "monospace"}} id="dropdown-basic-button" title="Sort" variant="dark">
            <Dropdown.Item href="#/action-1">Rating: High to Low</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Cost: Low to High</Dropdown.Item>
          </DropdownButton>
          </Col>
        </Row>
        <Container>
        {artistData.map((artist, index) => (
          <div className="py-3" key={index}>
            <Row style={{height: "320px"}}>
              <Col xs={4}>
                <InkedCustomCard
                  cardWidth="intial"
                  cardHeight="320px"
                  cardLeftMargin="0px"
                  cardmMargin="0px"
                  imgHeight="180px"
                  img={artist.profileImageUrl}
                  button={true}
                  children={
                  <>
                  <h3>{artist.name}</h3>
                  {/* <p>${artist.perInchPrice}/inch</p> */}
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#333' }}>
                    ${artist.perInchPrice}
                  </p>
                  </>
                  }
                  onClick={handleCardClick}
                  navigateTo="/artist"
                />
              </Col>
              <Col xs={5}>
                <ArtistGallery />
              </Col>
              <Col>
                <CustomerReview artistData={artist.customerReviews} tags={artist.tags}/>
              </Col>
            </Row>
          </div> 
        ))}
        </Container>
      </div>
    </>
  );
}
