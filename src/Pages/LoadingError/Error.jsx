import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useRouteError, useNavigate } from "react-router";

const ErrorPage = () => {
  const [animationData, setAnimationData] = useState(null);
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/error.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="w-64 h-64 mx-auto">
          {animationData && (
            <Lottie animationData={animationData} loop={true} />
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mt-6 mb-2">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          {error?.message || error?.data || "An unexpected error occurred."}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
