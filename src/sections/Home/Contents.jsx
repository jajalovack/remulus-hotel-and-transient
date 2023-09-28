import { Link } from "react-router-dom"
import Testimony from "./Testimony"
import "./Contents.scoped.css"
import introImage from "../../assets/home/intro.jpg"
import review1 from "../../assets/home/review1.webp"
import review2 from "../../assets/home/review2.jpg"
import review3 from "../../assets/home/review3.jpg"

const Contents = () => {
  return (
    <>
        <section className="intro">
            <div className="contentText">
                <h2>For long or just a while, we got you!</h2>
                <h5>We cater to long-stayers and overnighters alike.</h5>
            </div>
            <div className="contentImg">
                <img src={introImage} />
            </div>
        </section>
        <section className="testimonies">
            <Testimony name="Raegan Rogers" room="Cozy Studio Apartment, Manila" review="Cozy and well-appointed room with a comfortable bed, modern amenities, and great service. A perfect retreat for a relaxing stay." src={review1}/>
            <Testimony name="Melanie Schmendernitz" room="Beachfront Bungalow, Antipolo" review="Spacious and clean room with stunning views, friendly staff, and convenient location. A delightful home away from home." src={review2}/>
            <Testimony name="Carlo Triúnfo" room="Island Retreat Cottage, Puerto Princesa" review="Compact but stylish room, efficient service, and an unbeatable value. Ideal for budget-conscious travelers seeking comfort and convenience." src={review3}/>
        </section>
        <section className="seeHotels">
            <div className="contentText">
                <h2>Take a look at our offers</h2>
                <h5>Find the room that suits your needs</h5>
            </div>
            <div className="contentImg">
                <div className="btnGroup">
                    <Link to="/rooms" className="primary">Book for a day</Link>
                    <Link to="/rooms" className="secondary">Rent long-term</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contents