import React from "react";
import "./index.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="person">
            <div>
              <img src={image} alt={name} className="img" />
            </div>
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
