import React from "react";

const Navbar = () => {
  return (
    <div className="nav-item">
      <div className="container">
        <div className="nav-depart">
          <div className="depart-btn">
            <i className="ti-menu" />
            <span>Tất cả danh mục</span>
            <ul className="depart-hover">
              <li className="active">
                <a href="#">Quần áo nữ</a>
              </li>
              <li>
                <a href="#">Quần áo nam</a>
              </li>
              <li>
                <a href="#">Đồ lót</a>
              </li>
              <li>
                <a href="#">Quần áo trẻ em</a>
              </li>
              <li>
                <a href="#">Thời trang thương hiệu</a>
              </li>
              <li>
                <a href="#">Phụ kiện/giày</a>
              </li>
              <li>
                <a href="#">Thương hiệu xa xỉ</a>
              </li>
              <li>
                <a href="#">Thời trang ngoài trời</a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="nav-menu mobile-menu">
          <ul>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Mua sắm</a>
            </li>
            <li>
              <a href="#">Bộ sưu tập</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
            <li>
              <a href="#">Trang</a>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap" />
      </div>
    </div>
  );
};

export default Navbar;
