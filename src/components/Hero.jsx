import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <div className="menu_left">
        <img src="/restu_imgs/menu_img.jpg" alt="" className='menu_img'/>
      </div>

      <div className="menu_right">
        <h1>Prasad Menu: Authentic <br /> Indian, Turkish & Thai <br /> Dishes</h1>
        <p>At Prasad, we celebrate the vibrant essence of Indian, Turkish, and Thai cuisines. Our menu is a delightful fusion of tradition and innovation, crafted to tantalize your taste buds. Relish our signature Biryani, rich with aromatic spices, and indulge in the creamy decadence of our Butter Chicken, a perennial favorite. Dive into the heart of India with our fragrant curries and tandoori specialties, savor the robust flavors of Turkey with our kebabs and mezes, and experience Thailand’s fresh, balanced tastes with our authentic dishes. At Prasad, every plate tells a story of culinary mastery, promising an extraordinary dining experience.</p>

        <button className='menu_btn' onClick={() => navigate("/menu")}>
          View
        </button>
      </div>
    </div>
  );
};

export default Hero;
