import React from "react";
import SectionTitles from "../../../components/SectionTitles";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <div className="my-5">
      <SectionTitles
        heading="FROM OUR MENU"
        subHeading="---Check it out---"
      ></SectionTitles>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <h1 className="flex justify-center">
        <button className="uppercase border-b-4 rounded-md py-2">
          View full menu
        </button>
      </h1>
    </div>
  );
};

export default PopularMenu;
