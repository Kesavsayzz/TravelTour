import React , { useEffect }from "react";
import './home.css';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { TbAppsFilled } from "react-icons/tb";
import videohome from '../../Assets/video/videohome.mp4';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    // lets create a react hook to add a scroll animation...
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={videohome} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <span data-aos="fade-up" className="smallText">
                        Our packages
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination: </label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here..." />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your date: </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price: </label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FaFacebook className="icon" />
                        <BsTwitterX className="icon" />
                        <FaInstagram className="icon" />
                        <SiTripadvisor className="icon" />
                    </div>
                    <div className="leftIcons">
                        <FaList className="icon" />
                        <TbAppsFilled className="icon" />                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home