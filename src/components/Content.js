import React from 'react';
import imgOne from "../images/photo-1482049016688-2d3e1b311543.jpg"
import imgTwo from "../images/photo-1593584785033-9c7604d0863f.jpg"
const Content = () => {
    return (
        <>
        <div className="menu-card">
            <img src={imgOne} alt="" className=" h-full mb-12  rounded" />

            <div className="center-content">
                <h2 className="text-2xl mb-4">Egg Muffling</h2>
                <p className=" mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing </p>
                <span>$234</span>
            </div>
        </div>
        <div className="menu-card">
            <img src={imgTwo} alt="" className="mb-12  h-full rounded" />

            <div className="center-content">
                <h2 className="text-2xl mb-4">Egg Muffling</h2>
                <p className=" mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing </p>
                <span>$234</span>
            </div>
        </div>
        </>
    );
};

export default Content;