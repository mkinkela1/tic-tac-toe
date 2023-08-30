import React from "react";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import { AllRoutes } from "src/enums/AllRoutes";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="bg-white rounded-xl p-4 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>

          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mb-4">
            <input
              id="username"
              name="username"
              type="text"
              required
              className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mb-4">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mb-4">
            <Button label="Log in" onClick={() => ""} />
          </div>

          <p className="text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to={AllRoutes.REGISTRATION}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
