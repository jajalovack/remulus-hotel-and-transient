import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
  const [isBookedNa,bookedNa]=useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(String(import.meta.env.VITE_API)+"/hotels/"+id);
        const hotels = response.data;
        setHotelData(hotels);
        if (response.status!=404)
        {
          sike(true);
          if (hotels.isBooked)
          {
            bookedNa(true);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  document.title=hotelData.name+" - Remulus"

  function bookHotel()
  {
    let newData=hotelData;
    newData.isBooked=true;
    axios.put(String(import.meta.env.VITE_API)+"/hotels/"+id,newData);
    alert("Room Successfully Booked!")
    navigate("/rooms/"+id);
  }

  function displayPrice()
  {
    let prices=[];
    if (String(hotelData.bookingType).includes("Transient"))
    {
      prices.push(<>&emsp;&emsp;<b>Transient:</b> {hotelData.price_per_night} per 24 hours<br/></>);
    }
    else
    {
      prices.push(<>&emsp;&emsp;<b>Transient:</b> <i>Not available</i><br/></>)
    }
    if (String(hotelData.bookingType).includes("Long-term"))
    {
      prices.push(<>&emsp;&emsp;<b>Long-term:</b> {hotelData.price_per_month} per month<br/></>)
    }
    else
    {
      prices.push(<>&emsp;&emsp;<b>Long-term:</b> <i>Not available</i><br/></>)
    }
    return prices
  }

  function bookingTypes()
  {
    let options=[];
    if (hotelData.isBooked)
    {
      options.push(<option selected>Already Booked</option>)
    }
    else
    {
      if (hotelData.bookingType=="Long-term, Transient")
      {
        options.push(<option value="longTerm" selected>Long-term</option>);
        options.push(<option value="transient">Transient</option>);
      }
      else if (hotelData.bookingType=="Long-term")
      {
        options.push(<option value="longTerm" selected>Long-term</option>);
      }
      else
      {
        options.push(<option value="transient" selected>Transient</option>);
      }
    }
    return options;
  }

  function proceedToBook(nakuhaNa)
  {
    if (localStorage.getItem("token")!=undefined)
    {
      return (<button className="proceed" onClick={bookHotel} disabled={nakuhaNa}>Proceed to booking&emsp;<FontAwesomeIcon icon={faArrowRight} /></button>);
    }
    else
    {
      return (
        <>
          <div className="divider"></div>
          <div className="deter">
            <h5>To continue, please</h5>
            <div className="deterButtons">
              <Button as={Link} to="/login" className="logIn">Log in</Button> or <Button as={Link} to="/register" className="register">Register</Button>
            </div>
          </div>
        </>
      )
    }
  }

  function haba()
  {
    if (!hotelData.isBooked)
    {
      return (
        <>
          <h4>How long will you stay?</h4>
          <input type="number" min="1" defaultValue="1" className="duration"/><br/>
        </>
      )
    }
  }

  if (exists)
  {
  return (
    <>
      <div className="contentContainer">
        <span className="buttonContainer">
          <Link to={"/rooms"}><span className="back"><FontAwesomeIcon icon={faArrowLeft}/> Back</span></Link>
        </span>
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
              {displayPrice()}
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
            <select name="bookingType" id="bookingType" disabled={isBookedNa}>
              {bookingTypes()}
            </select>
            {haba()}
            {proceedToBook(hotelData.isBooked)}
        </div>
      </div>
    </>
  )}
  return <NotExist errorType="room"/>
}

export default HotelDetails