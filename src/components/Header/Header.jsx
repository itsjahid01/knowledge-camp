import React from "react";
import user from "../../assets/jahid.jpg";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <div>
          <a className="text-2xl font-bold">Knowledge Cafe</a>
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
