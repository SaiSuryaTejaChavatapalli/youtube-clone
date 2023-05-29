import { Link } from "react-router-dom";

const ErrorFallback = () => {
  return (
    <div className="flex justify-center items-center my-28">
      <div>
        <img
          src="https://img.freepik.com/premium-vector/red-404-error-page-found-with-long-shadow-flat-style-vector-illustration_505557-3407.jpg?w=2000"
          alt="fallback-ui"
          className="h-72"
        />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Uh-oh!</h1>
          <p className="text-gray-400">
            Sorry! This should not have happened. Please retry.
          </p>
          <Link to="/">
            <button className="bg-[#E40613] text-white p-2 font-semibold w-auto h-10 px-5 text-sm">
              RETRY
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
