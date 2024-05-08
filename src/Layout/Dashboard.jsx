import React from "react";
import {
  FaBars,
  FaBook,
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaList,
  FaShopify,
  FaUsers,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdEmail, MdOutlinePayment, MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  // const isAdmin = true;
 

  return (
    <div className="flex text-black">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <ImSpoonKnife />
                  Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBooking">
                  <FaBook />
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <MdOutlinePayment />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartPlus></FaCartPlus>
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineRateReview />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <TbBrandBooking />
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShopify />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <MdEmail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
