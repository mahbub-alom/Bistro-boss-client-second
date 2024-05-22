import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payment = [] } = useQuery({
    queryKey: ["payment", users.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${users.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h1>Payment history : {payment.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((item, index) => (
              <tr key={item._id} className="hover">
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
