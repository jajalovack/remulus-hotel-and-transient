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
    </>
  )
}

export default Contents