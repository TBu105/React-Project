import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tourData, setTourData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [removeTour, setRemoveTour] = useState("");

  const refreshData = () => {
    setDataLoaded(false);
    fetchTourData();
  };

  const appTakeIdOfRemoveTour = (tourID) => {
    setRemoveTour(tourID);
  };

  useEffect(() => {
    const removeTourOnTourDataByID = () => {
      const tour = tourData.filter((tour) => tour.id !== removeTour);
      setTourData(tour);
    };

    removeTourOnTourDataByID();
  }, [removeTour]);

  const fetchTourData = async () => {
    try {
      const rawData = await fetch(url);
      const data = await rawData.json();
      setTourData(data);
      setDataLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTourData();
  }, []);

  return (
    <>
      {dataLoaded === false ? (
        <Loading />
      ) : (
        <Tours
          tourData={tourData}
          appTakeIdOfRemoveTour={appTakeIdOfRemoveTour}
          refreshData={refreshData}
        />
      )}
    </>
  );
}

export default App;
