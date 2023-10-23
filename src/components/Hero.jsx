import React from 'react';
import WomanImg from '../img/woman_hero.png'
import { Link } from "react-router-dom";

const Hero = () => {
    return <section className="py-24 h-[800px] bg-no-repeat bg-cover bg-hero">
        <div className="container flex justify-around h-full ">
            <div className="flex flex-col justify-center">
                <div className="font-semibold flex items-center uppercase">
                    <div className="bg-red-500 w-10 h-[2px] mr-3"></div>New Trend
                </div>
                <h1 className="text-[70px] leading-normal font-light mb-4">
                    Autumn Collection 2025 <br/>
                    <span className="font-semibold">
                        Women's Fashion
                    </span>
                </h1>
                <Link to={`/`} className="self-start font-semibold hover:underline underline-offset-4 uppercase ">Discover More</Link>

            </div>
            <div className="hidden lg:block">
                <img src={WomanImg} alt="img" />
            </div>
        </div>
    </section>;
};

export default Hero;
