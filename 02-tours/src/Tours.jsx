import React, { useEffect, useState } from "react";
import Tour from "./Tour";

const Tours = ({ tourData, appTakeIdOfRemoveTour, refreshData }) => {
  const [removeTour, setRemoveTour] = useState("");
  const [refreshTourData, setRefreshTourData] = useState(false);

  const toursTakeIdOfRemoveTour = (tourID) => {
    setRemoveTour(tourID);
    // console.log(tourID);
  };

  useEffect(() => {
    appTakeIdOfRemoveTour(removeTour);
  }, [removeTour]);

  const refreshTourDataAgain = () => {
    refreshData();
  };

  return (
    <>
      <h1>Our Tours</h1>
      <Tour
        tourData={tourData}
        toursTakeIdOfRemoveTour={toursTakeIdOfRemoveTour}
      />
      <button onClick={() => refreshTourDataAgain()}>Refesh</button>
    </>
  );
};

export default Tours;
