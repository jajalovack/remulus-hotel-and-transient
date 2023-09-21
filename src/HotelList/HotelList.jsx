import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faStar,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import "./hotelList.css";

function HotelList() {
  const [hotelData, setHotelData] = useState([]);

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
    <Container>
      <Row className="custom-row">
        {hotelData.map((hotel, index) => (
          <Col key={`hotel-${index}`} xs={12} sm={6} md={4} lg={3}>
            <Card className="custom-card">
              <Card.Img variant="top" src={hotel.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon icon={faBuilding} /> Brand: {hotel.brand}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faStar} /> Star Rating:{" "}
                    {hotel.starRating}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faMapMarker} /> Address:{" "}
                    {hotel.location.address.addressLine1},{" "}
                    {hotel.location.address.cityName},{" "}
                    {hotel.location.address.stateCode}{" "}
                    {hotel.location.address.zip}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faStar} /> Overall Guest Rating:{" "}
                    {hotel.overallGuestRating}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HotelList;
