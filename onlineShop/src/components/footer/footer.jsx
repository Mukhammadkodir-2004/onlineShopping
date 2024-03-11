import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa"
import "./footer.css"
import { Link } from "react-router-dom"

export const Footer = ()=>{
    return(
        <footer className="footer">
           <div className="container">
           <div className="footerContent">
           <div className="iconsBox">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaPinterest/>
            </div>
            <ul className="belowPages">
                <li className="belowPagesItem">
                    <Link className="link" to="/contact">
                        <p className="linkBelowItem">Contact</p>
                    </Link>
                </li>
                <li className="belowPagesItem">
                    <Link className="link" to="/shop">
                        <p className="linkBelowItem">Shop</p>
                    </Link>
                </li>
                <li className="belowPagesItem">
                    <Link className="link" to="/pricing">
                        <p className="linkBelowItem">Pricing</p>
                    </Link>
                </li>
                <li className="belowPagesItem">
                    <Link className="link" to="/privacy">
                        <p className="linkBelowItem">Privacy Police</p>
                    </Link>
                </li>
            </ul>
           </div>
            </div> 
        </footer>
    )
}