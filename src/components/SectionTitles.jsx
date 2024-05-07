import React from "react";

const SectionTitles = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center w-3/12 my-12">
      <h1 className="text-yellow-500">{subHeading}</h1>
      <h2 className="text-black my-2 text-3xl py-2 border-y-2 border-gray-500">{heading}</h2>
    </div>
  );
};

export default SectionTitles;
