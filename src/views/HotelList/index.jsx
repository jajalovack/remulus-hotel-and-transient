import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faStar,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import "./HotelList.scoped.css";
import { Link } from "react-router-dom";

function HotelList() {
  const [hotelData, setHotelData] = useState([]);
  document.title="Remulus - See Rooms"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/hotels");
        const hotels = response.data;
        console.log(hotels);
        setHotelData(hotels);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Container>
      <Row className="custom-row">
        {hotelData.map((hotel, index) => (
          <Col key={`hotel-${index}`} xs={12} sm={6} md={4} lg={3}>
            <Card className="custom-card" as={Link} to={"/rooms/"+hotel.id}>
              <Card.Img variant="top" src={hotel.thumbnail} className="cardImage"/>
              <Card.Body>
              <div className="hotelDetails">
                <Card.Title>
                  <div className="hotelName">
                  {hotel.name}
                  </div>
                  </Card.Title>
                <Card.Text>
                    <p>
                      <FontAwesomeIcon icon={faMapMarker} />&ensp;Branch: {hotel.branch}
                    </p>
                    <p className="address">
                      <FontAwesomeIcon icon={faBuilding} />&ensp;Booking Type: {hotel.bookingType}
                    </p>
                    <p style={{transform:"translateX(-2px)"}}>
                      <FontAwesomeIcon icon={faStar} style={{marginRight:"-3.7px"}}/>&ensp;Overall Guest Rating: {hotel.rating}
                    </p>
                </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <div className="space"></div>
    </>
  );
}

export default HotelList;
