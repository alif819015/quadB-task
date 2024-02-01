const MovieBookingForm = ({ showName, onSubmit }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1 className="text-2xl font-semibold mb-4">Book Ticket</h1>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="showName"
            className="block text-sm font-medium text-gray-600"
          >
            Show Name:
          </label>
          <input
            type="text"
            id="showName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={showName}
            readOnly
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieBookingForm;
