import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            S/02,Ghanshyam Complex Valmiki Soc Near Chandlodia Bridge, Chandlodia , Ahmedabad, 382481
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: + 91 84900 59352</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: dharmik@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title" >Categories</div>
                    <span className="text" onClick={() => navigate("/product/" + 6)}>Hyundai Creta</span>
                    <span className="text" onClick={() => navigate("/product/" + 9)}>Maruti Swift</span>
                    <span className="text" onClick={() => navigate("/product/" + 7)}>Honda City</span>
                    <span className="text" onClick={() => navigate("/product/" + 8)}>Maruti Ertiga</span>
                    <span className="text" onClick={() => navigate("/product/" + 4)}>Toyota Fortuner</span>
                    <span className="text" onClick={() => navigate("/product/" + 3)}>Toyota Innova Crysta</span>
                    <span className="text" onClick={() => navigate("/product/" + 2)}>Maruti Celerio</span>
                    <span className="text" onClick={() => navigate("/product/" + 1)}>Honda Amaze</span>
                    
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text ">
                        RentalHub 2023 CREATED BY Dharmik. 
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
