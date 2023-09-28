import { Link } from "react-router-dom";
import room from "../../assets/404/notExist.jpg";
import lost from "../../assets/404/lost.jpeg"
import "NotExist.scoped.css";

const NotExist = (props) => {
    document.title="Remulus - 404 not found"
    if (props.errorType=="room")
    {
        return (
            <>
                <div className="error">
                    <img src={room}/>
                    <h1>404 This room does not exist...</h1>
                    <p>...at least not yet. &#x1f609;</p>
                </div>
            </>
          )
    }
    else
    {
        return (
            <>
                <div className="error">
                    <img src={lost}/>
                    <h1>404 You seem lost...</h1>
                    <p>Please allow me to <Link to="/">guide you back.</Link></p>
                </div>
            </>
          )
    }
}

export default NotExist