import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./HotelDetails.scoped.css";
import NotExist from "../NotExist";

const HotelDetails = () => {
  let {id}=useParams();
  const [hotelData, setHotelData] = useState({
    name:"",
    description:"",
    pictures:[],
    amenities:[]
  });
  const [exists, sike]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/hotels/"+id);
        const hotels = response.data;
        setHotelData(hotels);
        if (response.status!=404)
        {
          sike(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  document.title=hotelData.name+" - Remulus"
  function displayPriceTransient()
  {
    if (String(hotelData.bookingType).includes("Transient"))
    {
      return <>&emsp;<b>Transient:</b> {hotelData.price_per_night} per 24 hours<br/></>
    }
    else
    {
      return<>&emsp;<b>Transient:</b> <i>Not available</i><br/></>
    }
  }
  function displayPriceLongTerm()
  {
    if (String(hotelData.bookingType).includes("Long-term"))
    {
      return <>&emsp;<b>Long-term:</b> {hotelData.price_per_month} per month<br/></>
    }
    else
    {
      return<>&emsp;<b>Long-term:</b> <i>Not available</i><br/></>
    }
  }

  if (exists)
  {
  return (
    <>
      <div className="contentContainer">
        <div className="details">
          <div className="detailsText">
            <h1>{hotelData.name} <span style={{whiteSpace: "nowrap"}}>({hotelData.rating}/10 <FontAwesomeIcon icon={faStar} style={{width: "30px"}}/>)</span></h1>
            <p className="description">{hotelData.description}</p>
          </div>
          <div className="previewContainer">
            <Carousel className="preview">
              {
                hotelData.pictures.map((src)=>(
                  <Carousel.Item className="carouselItem" interval={2000}>
                    <img src={src}/>
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </div>
          <div className="dataBelowCarousel">
            <div className="moreData">
              <h4>Room Details</h4>
              &emsp;<b>Branch:</b> {hotelData.branch}<br/>
              &emsp;<b>Booking Type:</b> {hotelData.bookingType}<br/>
              &emsp;<b>Pricing:</b><br/>
              &emsp;{displayPriceTransient()}
              &emsp;{displayPriceLongTerm()}
            </div>
            <div className="amenities">
              <h4>Amenities:</h4>
              <ul>
                {
                  hotelData.amenities.map((amenity,index)=>(<li key={index}>{amenity}</li>))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="checkout">
            <h1>Select rental type</h1>
        </div>
      </div>
    </>
  )}
  return <NotExist errorType="room"/>
}

export default HotelDetails