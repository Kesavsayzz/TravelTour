import React from "react";
import './navbar.css';
import { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navbar')
    // Function to toggle navbar
    const showNavbar = () => {
        setActive('navbar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navbar ')
    }
    return (
        <section className="navbarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon" /> TravelTour.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="#" className="btn">BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="closeNavbar">
                    <IoMdCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNavbar} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    )
}

export default Navbar