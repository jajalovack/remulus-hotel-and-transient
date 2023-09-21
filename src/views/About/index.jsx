import "./About.scoped.css"
import oldRemulus from "../../assets/about/oldRemulus.jpg"
import mrRemulus from "../../assets/about/edwardRemulus.jpg"
import oldHouse from "../../assets/about/oldGuesthouse.jpg"
import biggerHouse from "../../assets/about/biggerGuesthouse.jpg"
import modernRemulus from "../../assets/about/modernRemulus.jpg"
import checkIn from "../../assets/about/check-in.jpg"

const About = () => {
  document.title="Remulus - About us";
  return (
    <>
        <h1 className="title">About us</h1>
        <section className="contents">
          <div className="started">
            <div className="contentText">
              <h1>Where we started</h1>
              <p>
                In the heart of Makati, amidst the vibrant streets and the constant ebb and flow of life,
                the story of Remulus Hotel and Transient began as an earnest endeavor to provide a home away from home.
                Though today we stand as a well-known name in the hospitality industry, our journey did not commence with
                the grandeur that now defines us.
              </p>
            </div>
            <div className="contentImg">
              <img src={oldRemulus}/>
              <small>The first Remulus Hotel in Makati, 1994</small>
            </div>
          </div>
          <div className="beginning">
            <div className="contentImg">
              <img src={mrRemulus}/>
              <small>Mr. Edward Remulus, 1986</small>
            </div>
            <div className="contentText">
              <h1>A Humble Beginning</h1>
              <p>
                In the early 1990s, our founder, Mr. Edward Remulus, envisioned a place where weary travelers could find
                comfort and solace in the midst of their journeys. At that time, the idea of Remulus Hotel and Transient
                was still a fledgling dream, a mere seed of possibility.
              </p>
              <p>
                Mr. Remulus had always believed in the importance of offering genuine hospitality and an authentic
                local experience to those seeking refuge within our town. With this vision in mind, he acquired
                a small guesthouse in a quiet corner of the town, not far from where our flagship hotel stands today.
              </p>
            </div>
          </div>
          <div className="genesis">
            <div className="contentText">
              <h1>The Genesis of Hospitality</h1>
              <p>
                The guesthouse was modest, with just a few rooms, each bearing the personal touch of Mr. Remulus himself.
                He took great pride in creating a warm and welcoming environment, adorning the walls with local art,
                and curating a menu of delectable dishes that showcased the flavors of the region.
              </p>
              <p>
                Word of mouth quickly spread, and soon, the guesthouse became a cherished haven for travelers who sought
                more than just a place to rest their heads. It became a place where stories were exchanged,
                friendships were forged, and memories were made.
              </p>
            </div>
            <div className="contentImg">
              <img src={oldHouse}/>
              <small>The interior of the old guesthouse, 1988</small>
            </div>
          </div>
          <div className="evolution">
            <div className="contentImg">
              <img src={biggerHouse}/>
              <small>The newly-rennovated guesthouse, 1992</small>
            </div>
            <div className="contentText">
              <h1>The Evolution</h1>
              <p>
                As the years passed, the guesthouse evolved. With the addition of more rooms, amenities, and a growing team
                of dedicated staff, it transformed into a full-fledged hotel. The commitment to providing exceptional service
                and a personalized experience remained at the core of everything we did.
              </p>
              <p>
                The name "Remulus" became synonymous with quality, comfort, and a warm sense of belonging.
                It was only natural that the establishment became known as Remulus Hotel.
              </p>
            </div>
          </div>
          <div className="transient">
            <div className="contentText">
              <h1>The Transient Experience</h1>
              <p>
                As our reputation grew, so did the desire to expand our reach and embrace the diverse needs of travelers.
                It was during this period that we introduced the "Transient" concept—a versatile and affordable option
                for those looking for short-term stays in the city. This expansion not only broadened our horizons
                but also allowed us to cater to a wider audience.
              </p>
            </div>
            <div className="contentImg">
              <img src={modernRemulus}/>
              <small>Present Remulus Hotel and Transient, 2012</small>
            </div>
          </div>
          <div className="future">
            <div className="contentImg">
              <img src={checkIn}/>
            </div>
            <div className="contentText">
              <h1>The Present and Beyond</h1>
              <p>
                Today, Remulus Hotel and Transient proudly stands as a beacon of hospitality, embodying the spirit of our founder's vision.
                Our establishment is more than just a place to sleep; it's a place to connect, rejuvenate, and experience the essence of our city.
              </p>
              <p>
                Our journey from a small guesthouse to the multifaceted establishment we are today has been a labor of love,
                a testament to our unwavering dedication to providing exceptional hospitality. We continue to innovate, grow,
                and adapt to the ever-changing needs of our guests, always with the goal of offering a truly memorable and authentic experience.
              </p>
              <p>
                As we reflect on our humble beginnings and the remarkable path we've traveled, we invite you to be a part of our story.
                Whether you're here for a brief transient stay or a leisurely retreat, we're honored to share our journey with you
                and look forward to creating new memories together.
              </p>
            </div>
          </div>
        </section>
    </>
  )
}

export default About