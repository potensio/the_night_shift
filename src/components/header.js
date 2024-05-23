import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-1 py-8 justify-between max-w-screen-xl">
        <a>Logo</a>
        <div className="flex gap-5">
          <a>Portfolio</a>
          <a>How it works</a>
          <a>Subscription</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
