import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function HotelList() {
  const mockHotelData = [
    {
      id: 1,
      thumbnailUrl: "hotel1.jpg",
      name: "Sample Hotel 1",
      brand: "Sample Brand 1",
      starRating: 4,
      location: {
        address: {
          addressLine1: "123 Sample St",
          cityName: "Sample City",
          stateCode: "CA",
          zip: "12345",
        },
        neighborhoodName: "Sample Neighborhood",
      },
      overallGuestRating: 8.5,
      totalReviewCount: 150,
      allInclusiveRateProperty: true,
    },
    {
      id: 1,
      thumbnailUrl: "hotel1.jpg",
      name: "Sample Hotel 1",
      brand: "Sample Brand 1",
      starRating: 4,
      location: {
        address: {
          addressLine1: "123 Sample St",
          cityName: "Sample City",
          stateCode: "CA",
          zip: "12345",
        },
        neighborhoodName: "Sample Neighborhood",
      },
      overallGuestRating: 8.5,
      totalReviewCount: 150,
      allInclusiveRateProperty: true,
    },
    {
      id: 1,
      thumbnailUrl: "hotel1.jpg",
      name: "Sample Hotel 1",
      brand: "Sample Brand 1",
      starRating: 4,
      location: {
        address: {
          addressLine1: "123 Sample St",
          cityName: "Sample City",
          stateCode: "CA",
          zip: "12345",
        },
        neighborhoodName: "Sample Neighborhood",
      },
      overallGuestRating: 8.5,
      totalReviewCount: 150,
      allInclusiveRateProperty: true,
    },
    {
      id: 1,
      thumbnailUrl: "hotel1.jpg",
      name: "Sample Hotel 1",
      brand: "Sample Brand 1",
      starRating: 4,
      location: {
        address: {
          addressLine1: "123 Sample St",
          cityName: "Sample City",
          stateCode: "CA",
          zip: "12345",
        },
        neighborhoodName: "Sample Neighborhood",
      },
      overallGuestRating: 8.5,
      totalReviewCount: 150,
      allInclusiveRateProperty: true,
    },
    {
      id: 2,
      thumbnailUrl: "hotel2.jpg",
      name: "Sample Hotel 2",
      brand: "Sample Brand 2",
      starRating: 3,
      location: {
        address: {
          addressLine1: "456 Example Ave",
          cityName: "Example Town",
          stateCode: "NY",
          zip: "54321",
        },
        neighborhoodName: "Example District",
      },
      overallGuestRating: 7.2,
      totalReviewCount: 90,
      allInclusiveRateProperty: false,
    },
    {
      id: 2,
      thumbnailUrl: "hotel2.jpg",
      name: "Sample Hotel 2",
      brand: "Sample Brand 2",
      starRating: 3,
      location: {
        address: {
          addressLine1: "456 Example Ave",
          cityName: "Example Town",
          stateCode: "NY",
          zip: "54321",
        },
        neighborhoodName: "Example District",
      },
      overallGuestRating: 7.2,
      totalReviewCount: 90,
      allInclusiveRateProperty: false,
    },
    {
      id: 2,
      thumbnailUrl: "hotel2.jpg",
      name: "Sample Hotel 2",
      brand: "Sample Brand 2",
      starRating: 3,
      location: {
        address: {
          addressLine1: "456 Example Ave",
          cityName: "Example Town",
          stateCode: "NY",
          zip: "54321",
        },
        neighborhoodName: "Example District",
      },
      overallGuestRating: 7.2,
      totalReviewCount: 90,
      allInclusiveRateProperty: false,
    },
    {
      id: 2,
      thumbnailUrl: "hotel2.jpg",
      name: "Sample Hotel 2",
      brand: "Sample Brand 2",
      starRating: 3,
      location: {
        address: {
          addressLine1: "456 Example Ave",
          cityName: "Example Town",
          stateCode: "NY",
          zip: "54321",
        },
        neighborhoodName: "Example District",
      },
      overallGuestRating: 7.2,
      totalReviewCount: 90,
      allInclusiveRateProperty: false,
    },
    {
      id: 2,
      thumbnailUrl: "hotel2.jpg",
      name: "Sample Hotel 2",
      brand: "Sample Brand 2",
      starRating: 3,
      location: {
        address: {
          addressLine1: "456 Example Ave",
          cityName: "Example Town",
          stateCode: "NY",
          zip: "54321",
        },
        neighborhoodName: "Example District",
      },
      overallGuestRating: 7.2,
      totalReviewCount: 90,
      allInclusiveRateProperty: false,
    },
  ];

  return (
    <Container>
      <Row>
        {mockHotelData.map((hotel) => (
          <Col key={hotel.id} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ marginBottom: "20px" }}>
              <Card.Img variant="top" src={hotel.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>
                  <div>Brand: {hotel.brand}</div>
                  <div>Star Rating: {hotel.starRating}</div>
                  <div>
                    Address: {hotel.location.address.addressLine1},{" "}
                    {hotel.location.address.cityName},{" "}
                    {hotel.location.address.stateCode}{" "}
                    {hotel.location.address.zip}
                  </div>
                  <div>Neighborhood: {hotel.location.neighborhoodName}</div>
                  <div>Overall Guest Rating: {hotel.overallGuestRating}</div>
                  <div>Total Review Count: {hotel.totalReviewCount}</div>
                  <div>
                    All-Inclusive Rate Property:{" "}
                    {hotel.allInclusiveRateProperty ? "Yes" : "No"}
                  </div>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Example Detail 1: Value</ListGroupItem>
                <ListGroupItem>Example Detail 2: Value</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HotelList;
