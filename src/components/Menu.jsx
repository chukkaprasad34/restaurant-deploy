import React from "react";

const Menu = () => {
  return (
    <div className="menu_page">

     <section className="menu_main1">
        <h1>Explore Our Signature Dishes</h1>
      </section>

     
      <section className="menu_cards_section">
        <div className="cards_grid">

          
          <div className="menu_card">
            <img src="./menu_cards/food1.jpg" alt="" />
            <h3>Biryani</h3>
          </div>

          
          <div className="menu_card">
            <img src="./menu_cards/food2.jpg" alt="" />
            <h3>Butter Chicken</h3>
          </div>

          
          <div className="menu_card">
            <img src="./menu_cards/food3.jpg" alt="" />
            <h3>Tandoori Chicken</h3>
          </div>

          
          <div className="menu_card">
            <img src="./menu_cards/food4.avif" alt="" />
            <h3>Thai Curry</h3>
          </div>

          
          <div className="menu_card">
            <img src="./menu_cards/food5.jpg" alt="" />
            <h3>Turkish Kebab</h3>
          </div>

          
          <div className="menu_card">
            <img src="./menu_cards/food6.jpg" alt="" />
            <h3>Seafood Platter</h3>
          </div>

        </div>
      </section>

      

    </div>
  );
};

export default Menu;
