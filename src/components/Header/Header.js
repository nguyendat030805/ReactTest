import React from "react";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartAndWishlist from "./CartAndWishlist";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      {/* Preloader Section */}
      {/* Header Section Begin */}
      <header className="header-section">
        <HeaderTop />
        <div className="container">
          <div className="inner-header">
            <div className="row">
              <Logo />
              <SearchBar />
              <CartAndWishlist />
            </div>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
