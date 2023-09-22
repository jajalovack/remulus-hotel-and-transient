import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faXTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

import "./Footer.scoped.css";
import footerLogo from "../assets/logo_footer.svg"

const Footer = () => {
  return (
    <footer>
        <div className="logoCopy">
            <object data={footerLogo}></object>
            <p>&copy;Remulus Group of Companies, 2023</p>
        </div>
        <div className="contacts">
            <h4>Contacts</h4>
            <ul>
                <li><FontAwesomeIcon icon={faPhone}/>&emsp;(+632) 2456 9879</li>
                <li><FontAwesomeIcon icon={faEnvelope}/>&emsp;info@remulushotel.ph</li>
                <li><FontAwesomeIcon icon={faFacebook}/>&emsp;Remulus - Hotel and Transient</li>
                <li><FontAwesomeIcon icon={faXTwitter}/>&emsp;@remulusH&T</li>
                <li><FontAwesomeIcon icon={faInstagram}/>&emsp;@remulushotelOfficial</li>
                <li><FontAwesomeIcon icon={faLocationDot}/>&emsp;143 McKinley Rd., Forbes Park, Makati City</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer