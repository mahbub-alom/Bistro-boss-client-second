import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaMoneyCheckAlt, FaTruck, FaUsers } from "react-icons/fa";
import { PiChefHatBold } from "react-icons/pi";

const AdminHome = () => {
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("admin-stats");
      return res.data;
    },
  });
  if (isLoading) {
    return <span>Loading......</span>;
  }

  return (
    <div>
      <h2>
        <span>Hi, Welcome </span>
        {users?.displayName ? users?.displayName : "back"}
      </h2>
      <div className="stats shadow gap-2">
        <div className="stat">
          <div className="flex gap-2 items-center text-center">
            <div className="text-4xl">
              <FaMoneyCheckAlt />
            </div>
            <div>
              <div className="stat-value">${stats?.revenue}</div>
              <div className="stat-title">Revenue</div>
            </div>
          </div>
        </div>
        <div className="stat">
          <div className="flex gap-2 items-center text-center">
            <div className="text-4xl">
              <FaUsers/>
            </div>
            <div>
              <div className="stat-value">{stats?.users}</div>
              <div className="stat-title">customers</div>
            </div>
          </div>
        </div>
        <div className="stat">
          <div className="flex gap-2 items-center text-center">
            <div className="text-4xl">
            <PiChefHatBold />
            </div>
            <div>
              <div className="stat-value">{stats?.menuItems}</div>
              <div className="stat-title">Products</div>
            </div>
          </div>
        </div>
        <div className="stat">
          <div className="flex gap-2 items-center text-center">
            <div className="text-4xl">
            <FaTruck />
            </div>
            <div>
              <div className="stat-value">{stats?.orders}</div>
              <div className="stat-title">Orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
