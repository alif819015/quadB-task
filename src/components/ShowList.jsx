import Component from "./ui/Component";

const ShowList = ({ shows, onShowClick }) => {
  //   console.log(shows)
  return (
    <Component>
      <h1 className="text-5xl font-bold text-center my-3">TV Shows</h1>
      <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {shows?.map((show) => (
          <div
            key={show?.show?.id}
            className="card card-compact h-full w-full lg:w-52 bg-base-100 shadow-xl"
          >
            <figure>
              <img
              className="w-full"
                src={show?.show?.image?.medium
                }
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{show?.show?.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => onShowClick(show.id)}
                  className="btn btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Component>
  );
};

export default ShowList;
