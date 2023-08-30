import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import ControlledInput from "src/components/ControlledInput";
import { AllRoutes } from "src/enums/AllRoutes";
import { TLoginResponse } from "src/types/TLoginResponse";
import { TOKEN, USER_ID } from "src/utils/Constants";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

type TLoginData = Yup.InferType<typeof loginSchema>;

const Login: React.FC = () => {
  const abortController = useRef<AbortController>();

  const { control, handleSubmit } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    abortController.current = new AbortController();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  const login = ({ id, token }: Pick<TLoginResponse, "id" | "token">) => {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(USER_ID, id.toString());
  };

  const handleSave = () =>
    handleSubmit(async ({ username, password }: TLoginData) => {
      try {
        const {
          data: { token, id },
        } = await axios.post<TLoginResponse>(
          "https://tictactoe.aboutdream.io/login/",
          {
            username,
            password,
          },
          { signal: abortController.current?.signal },
        );

        login({ token, id });
      } catch (e) {
        console.log(e);
      }
    })();
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="bg-white rounded-xl p-4 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>

          <ControlledInput
            control={control}
            fieldName="username"
            label="Username"
          />

          <ControlledInput
            control={control}
            fieldName="password"
            label="Password"
            type="password"
          />
          <Button label="Log in" onClick={handleSave} />

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
