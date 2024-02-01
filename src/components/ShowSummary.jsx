const ShowSummary = ({ summary, onBookTicket }) => {
    console.log(summary)
  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
      <button onClick={onBookTicket}>Book Ticket</button>
    </div>
  );
};

export default ShowSummary;
