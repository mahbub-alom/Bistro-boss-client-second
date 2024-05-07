import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center">
        <div className="bg-[#1f2937] w-1/2 py-20 ps-64">
          <h1>CONTACT US</h1>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#111827] space-y-2 w-1/2 py-24 ps-20">
          <h1 className="text-2xl">Follow Us</h1>
          <p>Join us on social media</p>
          <h1 className="flex gap-3 cursor-pointer">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </h1>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>&copy; 2024 - All right reserved by Bistro Boss</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
