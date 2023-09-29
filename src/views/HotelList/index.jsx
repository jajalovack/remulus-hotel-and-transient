import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faStar,
  faMapMarker,
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import "./HotelList.scoped.css";
import { Link } from "react-router-dom";

function HotelList() {
  const [hotelData, setHotelData] = useState([]);
  const [filteredHotel, setSubdata]= useState([]);
  const [branchFilter, setBranch]=useState("none");
  const [bookingTypeFilter, setBookingTypeFilter]=useState("both");
  const [filterConditions, setFilters]=useState([true,(branch)=>branch==branchFilter,(bookingType)=>bookingType==bookingTypeFilter]);
  const [forceRender,forcer]=useState(0);
  document.title="Remulus - See Rooms"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(String(import.meta.env.VITE_API)+"/hotels");
        const hotels = response.data;
        console.log(hotels);
        setHotelData(hotels);
        setSubdata(hotels.filter((x)=>x.isBooked==false));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(()=>{
    console.log(filterConditions)
    let resetFilter=hotelData;
    if (filterConditions[0])
    {
      resetFilter=resetFilter.filter((x)=>x.isBooked!=filterConditions[0]);
    }
    if (branchFilter!="none")
    {
      resetFilter=resetFilter.filter((x)=>x.branch==branchFilter);
    }
    setSubdata(resetFilter);
  }
  ,[forceRender]);

  useEffect(()=>{
    console.log(filteredHotel)
  },[filteredHotel]);

  function filter(event)
  {
    let newFilters=filterConditions;
    let index=event.target.value;
    for (let i=0;i<index;i++)
    {
      if (i==index-1)
      {
        newFilters[i]=!newFilters[i];
      }
    }
    if (event.target.id=="branch")
    {
      setBranch(event.target.value);
    }
    setFilters(newFilters);
    forcer(forceRender+1);
    console.log(hotelData[0].isBooked)
  }

  return (
    <>
    <div className="filterContainer">
      <div className="filter">
        <FontAwesomeIcon icon={faFilter}/>&ensp;
        <b>Filters:</b>&emsp;
        <input type="checkbox" id="hideBooked" value={1} defaultChecked onChange={filter}/> <label htmlFor="hideBooked">Hide Booked</label>&emsp;
        <label htmlFor="branch">Branch:</label>&ensp;
        <select id="branch" onChange={filter}>
          <option value="none" selected>Show All</option>
          <option value="Makati (Main)">Makati (Main)</option>
          <option value="Manila">Manila</option>
          <option value="Antipolo">Antipolo</option>
          <option value="Puerto Princesa">Puerto Princesa</option>
        </select>
      </div>
    </div>
    <Container>
      <Row className="custom-row">
        {filteredHotel.map((hotel, index) => (
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
