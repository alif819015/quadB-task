import { useState, useEffect } from "react";
import axios from "axios";
import ShowSummary from "../components/ShowSummary";
import MovieBookingForm from "../components/MovieBookingForm";

const ShowDetails = ({ match, history }) => {
  const [summary, setSummary] = useState("");
  const [showName, setShowName] = useState("");

  useEffect(() => {
    const { showId } = match.params;

   
    axios
      .get(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => {
        setSummary(response.data.summary);
        setShowName(response.data.name);
      })
      .catch((error) => console.error(error));
  }, [match.params]);

  const handleBookTicket = () => {
    history.push("/book-ticket", { showName });
  };

  return (
    <div>
      <ShowSummary summary={summary} onBookTicket={handleBookTicket} />
      <MovieBookingForm showName={showName} onSubmit={() => {}} />
    </div>
  );
};

export default ShowDetails;
