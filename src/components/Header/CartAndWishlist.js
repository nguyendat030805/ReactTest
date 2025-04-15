import React from "react";

const CartAndWishlist = () => {
  return (
    <div className="col-lg-3 text-right col-md-3">
      <ul className="nav-right">
        <li className="heart-icon">
          <a href="#">
            <i className="icon_heart_alt" />
            <span>1</span>
          </a>
        </li>
        <li className="cart-icon">
          <a href="#">
            <i className="icon_bag_alt" />
            <span>3</span>
          </a>
          <div className="cart-hover">
            <div className="select-items">
              <table>
                <tbody>
                  <tr>
                    <td className="si-pic">
                      <img src="img/select-product-1.jpg" alt="Product" />
                    </td>
                    <td className="si-text">
                      <div className="product-selected">
                        <p>₫60.00 x 1</p>
                        <h6>Kabino Bedside Table</h6>
                      </div>
                    </td>
                    <td className="si-close">
                      <i className="ti-close" />
                    </td>
                  </tr>
                  <tr>
                    <td className="si-pic">
                      <img src="img/select-product-2.jpg" alt="Product" />
                    </td>
                    <td className="si-text">
                      <div className="product-selected">
                        <p>₫60.00 x 1</p>
                        <h6>Kabino Bedside Table</h6>
                      </div>
                    </td>
                    <td className="si-close">
                      <i className="ti-close" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="select-total">
              <span>total:</span>
              <h5>₫120.00</h5>
            </div>
            <div className="select-button">
              <a href="#" className="primary-btn view-card">
                VIEW CARD
              </a>
              <a href="#" className="primary-btn checkout-btn">
                CHECK OUT
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartAndWishlist;
