import React, { useState, useEffect } from "react";

const Tour = ({ tourData, toursTakeIdOfRemoveTour }) => {
  const [removeTourID, setRemoveTourID] = useState("");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    // This will be executed after the state has been updated
    toursTakeIdOfRemoveTour(removeTourID);
  }, [removeTourID]);

  const takeTour = (id) => {
    const tour = tourData.filter((tour) => tour.id === id);
    const removeTour = tour[0].id;
    setRemoveTourID(removeTour);
  };

  const toggleChange = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      {tourData.map((tour) => {
        const { id, name, info, image, price } = tour;
        const halfInfo = info.slice(0, 150);

        return (
          <div key={id}>
            <img src={image} alt={name} />
            <div>
              <p>{name}</p>
              <p>{price}</p>
            </div>
            <p>
              {toggle === true ? halfInfo : info}
              <span>
                <button
                  onClick={() => {
                    toggleChange();
                  }}
                >
                  {toggle === true ? "Read more" : "Hide"}
                </button>
              </span>
            </p>
            <button onClick={() => takeTour(id)}>Not interested</button>
          </div>
        );
      })}
    </>
  );
};

export default Tour;
