import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-1 p-8 justify-between max-w-screen-xl">
        <a>Logo</a>
        <div className="hidden gap-5 sm:flex">
          <a>Portfolio</a>
          <a>How it works</a>
          <a>Subscription</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
