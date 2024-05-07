import React from "react";
import SectionTitles from "../../../components/SectionTitles";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured py-4 bg-fixed">
      <SectionTitles
        heading="FROM OUR MENU"
        subHeading="---Check it out---"
      ></SectionTitles>
      <div className="md:flex items-center gap-10 px-20 py-10 bg-slate-600 bg-opacity-60">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="text-white">
          <h1>March 20, 2023</h1>
          <h1>WHERE CAN I GET SOME?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline uppercase text-white border-0 border-b-2 mt-4">read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
