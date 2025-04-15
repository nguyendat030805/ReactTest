import React from "react";

const Content = () => {
    return (
        <div>
        {/* Breadcrumb Section Begin */}
        <div className="breacrumb-section">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="breadcrumb-text">
                    <a href="/"><i className="fa fa-home" /> Home</a>
                    <span>Shop</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Breadcrumb Section End */}

        {/* Product Shop Section Begin */}
        <section className="product-shop spad">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 order-1 order-lg-2">
                <div className="product-list">
                    <div className="row">
                    {/* Danh sách sản phẩm */}
                    {[...Array(9)].map((_, i) => (
                        <div className="col-lg-4 col-sm-6" key={i}>
                        <div className="product-item">
                            <div className="pi-pic">
                            <img src={`img/products/product-${i + 1}.jpg`} alt={`product-${i + 1}`} />
                            {(i === 0 || i === 6) && <div className="sale pp-sale">Sale</div>}
                            <div className="icon"><i className="icon_heart_alt" /></div>
                            <ul>
                                <li className="w-icon active"><a href="/"><i className="icon_bag_alt" /></a></li>
                                <li className="quick-view"><a href="/">+ Add Cart</a></li>
                                <li className="w-icon"><a href="/"><i className="fa fa-random" /></a></li>
                            </ul>
                            </div>
                            <div className="pi-text">
                            <div className="catagory-name">
                                {["Towel", "Coat", "Shoes", "Coat", "Shoes", "Shoes", "Towel", "Coat", "Shoes"][i]}
                            </div>
                            <a href="/"><h5>{[
                                "Pure Pineapple", "Guangzhou sweater", "Guangzhou sweater", "Microfiber Wool Scarf",
                                "Men's Painted Hat", "Converse Shoes", "Pure Pineapple", "2 Layer Windbreaker", "Converse Shoes"
                            ][i]}</h5></a>
                            <div className="product-price">₫{["14", "13", "34", "64", "44", "34", "64", "44", "34"][i]}.00</div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Product Shop Section End */}

        {/* Partner Logo Section Begin */}
        <div className="partner-logo">
            <div className="container">
            <div className="logo-carousel owl-carousel">
                {[1, 2, 3, 4, 5].map((num) => (
                <div className="logo-item" key={num}>
                    <div className="tablecell-inner">
                    <img src={`img/logo-carousel/logo-${num}.png`} alt={`logo-${num}`} />
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        {/* Partner Logo Section End */}
        </div>
    );
};

export default Content;
