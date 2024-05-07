import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin,isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin",users?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${users?.email}`);
      return res.data?.admin;
    },
  });

  return [isAdmin,isAdminLoading];
};

export default useAdmin;

