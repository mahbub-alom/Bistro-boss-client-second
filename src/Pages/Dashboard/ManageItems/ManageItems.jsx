import React from "react";
import SectionTitles from "../../../components/SectionTitles";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();
  const handleDeleteItem = (item) => {};
  return (
    <div>
      <SectionTitles
        heading="MANAGE ALL ITEMS"
        subHeading="---Hurry Up!---"
      ></SectionTitles>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>sr</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button className="btn btn-outline btn-success">
                      <FaEdit />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost bg-red-600"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
