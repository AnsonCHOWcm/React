import React from "react";
import star from "./img/star.png";

const Cards = (props) => {
    return (
        <section className = "cards">
            {props.item.openSpot === 0 && <div className = "cards--badget">SOLDOUT</div>}
            <img src = {props.item.coverImg} alt = "" className="cards--img"></img>
            <div className = "cards--stats">
                <img src = {star} alt = "" className="cards--star"></img> 
                <span>{props.item.status.rating}</span>
                <span className = "gray">({props.item.status.reviewCount}) *</span>
                <span className = "gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className = "bold">From ${props.item.price}</span> / person</p>
        </section>
    );
};

export default Cards;