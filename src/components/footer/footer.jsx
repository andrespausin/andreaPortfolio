import './footer.css';
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";


export function Footer(){
    return(
        <>
            <div className="footer-container">
                <div className="inner-footer">
                    <div className="footer-logo">
                        <h1>MY<span>SITE</span></h1>
                    </div>
                    <div className="footer-navigation">
                        <ul>
                            <a><li>Home</li></a>
                            <a><li>Services</li></a>
                            <a><li>Portfolio</li></a>
                            <a><li>Contact</li></a>
                            <a><li>About</li></a>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <a><li><i className="fab fa-instagram"> <AiFillInstagram/>  andreachacin__</i></li></a>
                            <a><li><i className="fab fa-linkedin-in"></i><AiFillLinkedin/>   Andrea Chacin</li></a>
                            <a><li><i className="fab fa-linkedin-in">email@email.com</i></li></a>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Andrea Chacin website. All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}