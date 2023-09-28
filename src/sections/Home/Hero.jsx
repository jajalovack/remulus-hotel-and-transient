import "./Hero.scoped.css";
import image from "../../assets/home/heroImage.jpg";
import logo from "../../assets/logo.svg"

const HomeHero = () => {
  return (
    <>
        <section className="hero">
          <img src={image}/>
          <object data={logo}></object>
        </section>
    </>
  )
}

export default HomeHero