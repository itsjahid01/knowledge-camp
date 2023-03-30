import React from "react";
import user from "../../assets/jahid.jpg";
const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-4">
        <div>
          <a className="text-2xl font-bold">CodePen Blog</a>
        </div>
        <div>
          <img className="w-10 rounded-full" src={user} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
