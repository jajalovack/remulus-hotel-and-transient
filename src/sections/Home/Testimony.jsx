import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./Testimony.scoped.css"

const Testimony = (props) => {
  return (
    <div className="testimony">
        <h4>{props.name}&emsp;<span className="stars"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span></h4>
        <small>{props.room}</small>
        <div className="content">
            <p>{props.review}</p>
            <div className="picture">
                <img src={props.src}/>
            </div>
        </div>
    </div>
  )
}

export default Testimony