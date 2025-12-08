import React from "react";
import "./ImageCards.css";

const ImageCards = () => {
  const cards = [
    {
      id: 1,
      img: "./service_cards/ser1.jpg",
      title: "Get A Platter!",
      desc: "Try a free taste of our kebabs.If you love it, get a platter"
    },
    {
      id: 2,
      img: "./service_cards/ser2.jpg",
      title: "Candlelight",
      desc: "Candle light celebration awaits.Make it magical"
    },
    {
      id: 3,
      img: "./service_cards/ser3.webp",
      title: "Moments",
      desc: "Moments to Remember"
    }
  ];

  return (
    <div className="cards_container">
      <h2 className="cards_heading">Our Special Services</h2>

      <div className="cards_wrapper">
        {cards.map((item) => (
          <div key={item.id} className="card_box">
            <img src={item.img} alt={item.title} className="card_img" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCards;
