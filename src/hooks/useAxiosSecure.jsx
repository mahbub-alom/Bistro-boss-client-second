import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use((request) => {
      const token = localStorage.getItem("access-token");
      request.headers.authorization = `Bearer ${token}`;
      return request;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response.status;
        if (status == 401 || status == 403) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
