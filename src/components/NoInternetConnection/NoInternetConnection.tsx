import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const NoInternetConnection: React.FC<Props> = ({ children }) => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  if (isOnline) {
    return children;
  } else {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          No Internet Connection
        </h1>
        <p className="text-lg text-gray-600">
          Please check your internet connection and try again.
        </p>
      </div>
    );
  }
};

export default NoInternetConnection;
