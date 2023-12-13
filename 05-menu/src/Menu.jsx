import React, { useState } from "react";
import Foods from "./Foods";
import data from "./data";

const Menu = () => {
  const [menus, setMenus] = useState(data);

  const allMenu = () => {
    setMenus(data);
  };

  const allBreakfast = () => {
    const breakfast = data.filter(food => food.category === "breakfast")
    setMenus(breakfast);
  };

  const allLunch = () => {
    const lunch = data.filter((food) => food.category === "lunch");
    setMenus(lunch);
  };

  const allShakes = () => {
    const shakes = data.filter((food) => food.category === "shakes");
    setMenus(shakes);
  };

  return (
    <div>
      <div>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>

      <div>
        <button className="button" onClick={() => allMenu()}>
          All
        </button>
        <button className="button" onClick={() => allBreakfast()}>
          Breakfast
        </button>
        <button className="button" onClick={() => allLunch()}>
          Lunch
        </button>
        <button className="button" onClick={() => allShakes()}>
          Shakes
        </button>
      </div>

      <Foods menus={menus} />
    </div>
  );
};

export default Menu;
