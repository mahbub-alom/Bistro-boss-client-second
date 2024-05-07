import React, { useEffect, useState } from "react";
import SectionTitles from "../../../components/SectionTitles";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div>
      <SectionTitles
        heading="CHEF RECOMMENDS"
        subHeading="---Should Try---"
      ></SectionTitles>

      <div className="grid md:grid-cols-3">
      {menu.slice(0, 3).map((item) => 
        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={item.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.recipe}</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-info uppercase">Add To Cart</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ChefRecommends;
