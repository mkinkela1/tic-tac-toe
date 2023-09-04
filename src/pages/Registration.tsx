import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "src/components/Button/Button";
import ControlledInput from "src/components/Input/ControlledInput";
import { AllRoutes } from "src/enums/AllRoutes";
import { BASE_API_URL } from "src/utils/Constants";
import { isNotObjectEmpty } from "src/utils/isEmptyObject";
import * as Yup from "yup";

const registrationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  repeatPassword: Yup.string()
    .test((value, { parent }) => value === parent.password)
    .required("Repeat password is required"),
});

type TRegistrationData = Yup.InferType<typeof registrationSchema>;

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const abortController = useRef<AbortController>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(registrationSchema),
    defaultValues: { username: "", password: "", repeatPassword: "" },
  });

  useEffect(() => {
    abortController.current = new AbortController();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  const handleSave = () =>
    handleSubmit(async ({ username, password }: TRegistrationData) => {
      try {
        await axios.post(
          `${BASE_API_URL}/register/`,
          {
            username,
            password,
          },
          { signal: abortController.current?.signal },
        );

        toast.success("Account created successfully.");

        navigate(AllRoutes.LOGIN);
      } catch {
        toast.error("Unable to register.");
      }
    })();
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="bg-white rounded-xl p-4 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registration
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

          <ControlledInput
            control={control}
            fieldName="repeatPassword"
            label="Repeat password"
            type="password"
          />
          <Button
            label="Register"
            onClick={handleSave}
            disabled={isNotObjectEmpty(errors)}
          />

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to={AllRoutes.LOGIN}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
