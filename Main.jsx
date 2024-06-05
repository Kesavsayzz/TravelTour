import React, { useEffect } from "react";
import './main.css';
// import icons
import { ImImages } from "react-icons/im";
import { HiLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

// import images
import borabora from '../../Assets/img/borabora.jpg'
import machupicchu from '../../Assets/img/machupicchu.jpg'
import tajmahal from '../../Assets/img/tajmahal.jpg'
import greatbarrierreef from '../../Assets/img/greatbarrierreef.jpg'
import bali from '../../Assets/img/bali.jpg'
import angkorwat from '../../Assets/img/angkorwat.jpg'
import goldentemple from '../../Assets/img/goldentemple.jpg'
import bluelagoon from '../../Assets/img/bluelagoon.jpg'
import capeelizabeth from '../../Assets/img/Capeelijabeth.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: borabora,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: "CULTURAL RELAX",
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World.! This place is known for its luxurious stays and adventurous activities.'
    }, 
    {
        id: 2,
        imgSrc: machupicchu,
        destTitle: 'Machu Picchu',
        location: "Peru",
        grade: "CULTURAL RELAX",
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peru, raising over Machu Picchu, the so-called Lost city of Incas. This is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
    }, {
        id: 3,
        imgSrc: greatbarrierreef,
        destTitle: 'Great Barrier Reef',
        location: "Australia",
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "lavish" and "beauty", Always interesting to be in this place.'
    }, {
        id: 4,
        imgSrc: tajmahal,
        destTitle: 'Taj Mahal',
        location: "India",
        grade: "CULTURAL RELAX",
        fees: '$700',
        description: 'Taj Mahal, located in Agra, India is a magnificient white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. It symbolises rich heritage and history and enduring love.'
    }, {
        id: 5,
        imgSrc: bali,
        destTitle: 'Bali Island',
        location: "Province of Indonesia, Indonesia",
        grade: "CULTURAL RELAX",
        fees: '$500',
        description: 'Bali is a beautiful island in Indonesia. It is known for its beautiful beaches, volcanic mountain eruptions, history, art & beautiful sandy beaches'
    }, {
        id: 6,
        imgSrc: angkorwat,
        destTitle: 'Angkor Wat',
        location: "Siem Reap, Cambodia",
        grade: "CULTURAL RELAX",
        fees: '$300',
        description: 'A Hindu-Buddhist temple complex in Cambodia. Located on a site measuring 162.2 hectares within the ancient Khmer capital of Angkor, it is considered as the largest religious structure in the world by Guinness World Records.'
    }, {
        id: 7,
        imgSrc: goldentemple,
        destTitle: 'Golden Temple',
        location: "Punjab, India",
        grade: "CULTURAL RELAX",
        fees: '$600',
        description: 'The Golden Temple (also known as the Harmandir Sahib) is a gurudwar located in the city of Amritsar, Punjab, India. It is the Pre-eminent spiritual site of Sikhism.'
    }, {
        id: 8,
        imgSrc: bluelagoon,
        destTitle: 'Blue Lagoon, Iceland',
        location: "Southwest Iceland",
        grade: "CULTURAL RELAX",
        fees: '$800',
        description: 'The Blue Lagoon is a geothermal spa in southwestern Iceland. The Spa is located in a lava field 5 km (3.1 mi) from Grindavik.'
    }, {
        id: 9,
        imgSrc: capeelizabeth,
        destTitle: 'Cape Elizabeth',
        location: "Maine, United States",
        grade: "CULTURAL RELAX",
        fees: '$400',
        description: 'Cape Elizabeth is a town in Cumberland. The town is part of the portland-South Portland-Biddeford, Maine, metropolitan statistical area.'
    }
]

const Main = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="secContent grid">
                {/* high order array method(map) */}
                {/* to do that we shall use list of objects in one array 
                 so to do that we have to create an array named data and from that 
                 we shall .map() array to fetch each destination at once */}

                 {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/* Here it will return single from the map array */}
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <LuClipboardCheck className="icon" />
                                    </button>
                                </div> 
                            </div>
                        )
                    })
                 }

            </div>
        </section>
    )
}

export default Main