import React from 'react'

const Infoone = () => {
  return (
    <div className="infoone">
        <div className="left">
            <h1>Prasad: Beachfront Indian,<br /> Turkish & Thai <br /> Restaurant</h1>
            <p>At Prasad, tradition meets modernity in a harmonious fusion that tantalizes the senses. Savor exquisite dishes crafted from the finest ingredients, all while soaking in breathtaking beach views. Our menu showcases the best of both worlds, bringing you the rich, aromatic spices of India and the bold, savory delights of Turkey.</p>
            <p>Enhance your experience with our expertly crafted cocktails, perfect for unwinding as you soak in the serene beach views.</p>
            <p>At Prasad, every moment is a celebration of flavor, culture, and the natural beauty of Phuket. Join us for an exquisite culinary journey.</p>
        </div>
        <div className="right">
            <video autoPlay muted loop className="info-video">
            <source src="infosample.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
  )
}

export default Infoone