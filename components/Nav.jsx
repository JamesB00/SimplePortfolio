import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-col bg-gradient-to-r  from-cyan-700 from-60% to-green-700 rounded-b-md">
      <div className="flex gap-5">
        <span className="bg-sky-700 flex gap-5 pt-2 pb-2 pl-4 pr-4 hover:bg-slate-500 rounded-bl-md">
          <p>Hello World</p>
        </span>

        <span className="flex ml-auto">
          <span className=" hover:bg-slate-500 pt-2 pb-2 pr-2 pl-2">
            <p>Hello World</p>
          </span>
          <span className=" hover:bg-slate-500 pt-2 pb-2 pr-2 pl-2">
            <p>Hello World</p>
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
