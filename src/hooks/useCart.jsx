import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", users?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${users.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
