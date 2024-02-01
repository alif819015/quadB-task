import { useState, useEffect } from "react";
import axios from "axios";
import ShowList from "../components/ShowList";

const Home = ({ history }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => setShows(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleShowClick = (showId) => {
    history.push(`/show/${showId}`);
  };
  console.log(shows);
  return <ShowList shows={shows} onShowClick={handleShowClick} />;
};

export default Home;
