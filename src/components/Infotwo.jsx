import React from 'react'

const Infoone = () => {
  return (
    <div className="infoone">
        <div className="left">
            <h1>Relaxing Beachside Dining <br /> Experience</h1>
            <p>Prasad redefines beachfront dining in Phuket, offering a unique fusion of Turkish and Indian cuisines with a Tulum-inspired vibe. Enjoy breathtaking beach views, warm ambience, and exceptional service with a smile.</p>
            <p>Indulge in a culinary journey where every detail is designed to delight—from the mood lighting and soothing music to the cozy seating and private dining options.</p>
            
        </div>
        <div className="right">
            <video autoPlay muted loop className="info-video">
            <source src="info.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
  )
}

export default Infoone