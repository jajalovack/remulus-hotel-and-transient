import "./Contents.scoped.css"
import introImage from "../../assets/home/intro.jpg"

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
            <div className="testimony"></div>
            <div className="testimony"></div>
            <div className="testimony"></div>
        </section>
        <section className="seeHotels">
            <div className="contentText">
                <h2>Take a look at our offers</h2>
                <h5>Find the room that suits your needs</h5>
            </div>
            <div className="contentImg">
                <div className="btnGroup">
                    <a href="#" className="primary">Book for a day</a>
                    <a href="#" className="secondary">Rent long-term</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contents