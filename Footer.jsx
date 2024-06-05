import React, { useEffect } from "react";
import './footer.css';
// import icons ==========
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { AiFillCopyrightCircle } from "react-icons/ai";

// import video ========
import videofooter from '../../Assets/video/videofooter.mp4';

import Aos from "aos";
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={videofooter} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" /> Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure consequatur aut veniam, cumque magnam quod distinctio natus dolores ut iusto a minima laborum sequi laudantium doloremque cupiditate magni autem.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <RiTwitterXFill className="icon" />
                            <FaYoutube className="icon" />
                            <FaSquareInstagram className="icon" />
                        </div>
                    </div>
                    
                    <div className="footerLinks grid">
                        {/* Group one */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>

                            {/* <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li> */}
                        </div>

                        {/* Group two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                OUR PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                RentCars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>

                            {/* <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li> */}
                        </div>

                        {/* Group three */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                               LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                France
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Europe
                            </li>

                            {/* <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Ocenia
                            </li> */}
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small><AiFillCopyrightCircle className="icon" />COPYRIGHTS RESERVED - TRAVELTOUR 2024</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer