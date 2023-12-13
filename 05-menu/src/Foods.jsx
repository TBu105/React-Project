import React from "react";

const Foods = ({ menus }) => {
  return (
    <div>
      {menus.map((menu) => {
        const { id, title, price, img, decs } = menu;

        return (
          <div key={id}>
            <div>
              <img src={img} alt={title} />
            </div>
            <div>
              <div>
                <h3>{title}</h3>
                <h3>{price}</h3>
              </div>

              <div className="underlineFoods"></div>

              <div>
                <p>{decs}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Foods;
