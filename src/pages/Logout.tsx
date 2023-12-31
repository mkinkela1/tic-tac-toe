import { CanceledError } from "axios";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useAuth } from "src/contexts/AuthContext";
import { BASE_API_URL } from "src/utils/Constants";
import axiosInstance from "src/utils/axiosInstance";

const Logout = () => {
  const { logout } = useAuth();
  const abortController = useRef<AbortController>();

  useEffect(() => {
    abortController.current = new AbortController();

    handleLogout();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axiosInstance.post(
        `${BASE_API_URL}/logout/`,
        {},
        { signal: abortController.current?.signal },
      );

      logout();
    } catch (e) {
      if (!(e instanceof CanceledError)) toast.error("Unable to logout.");
    }
  };

  return <>See you later :)</>;
};

export default Logout;
