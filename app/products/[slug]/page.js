import React from "react";
import Image from "next/image";
import Link from "next/link";

function Product({ params }) {
  return (
    <div className="product_detail">
      <div className="row">
        <div className="col s12 m6">
          <div
            className="main-image"
            id="main-show"
            style={{ backgroundImage: "url('/images/product6-1.jpg')" }}
          ></div>
          <div className="image-list">
            {[
              "/images/product6-1.jpg",
              "/images/product6-1.jpg",
              "/images/product6-1.jpg",
              "/images/product6-1.jpg",
              "/images/product6-1.jpg",
            ].map((url, index) => (
              <div
                className={`image-item ${index === 4 ? "active" : ""}`}
                key={index}
              >
                <a className="img-square" data-url={url}>
                  <Image
                    className="responsive-img"
                    src={url}
                    alt="自然淨化,環境清潔"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="col s12 m6">
          <div className="product-infor">
            <div className="section-block">
              <h5 className="name">介觀植礦防護液</h5>
              <h5 className="en_name">Natural All-Purpose Protective Spray</h5>
              <h4 className="price">ntd.450</h4>
            </div>
            <div className="section-block">
              <div className="size">50ml / 1.69fl.oz</div>
              <small className="comment"> </small>
            </div>
            <div>
              <div className="number-adjust" id="number-adjust">
                <span className="control minus">
                  <i className="tiny material-icons">remove</i>
                </span>
                <span className="number" id="number">
                  1
                </span>
                <span className="control add">
                  <i className="tiny material-icons">add</i>
                </span>
              </div>
              <div className="custom-select" style={{ width: "200px" }}>
                <div className="select-wrapper">
                  <input
                    className="select-dropdown dropdown-trigger"
                    type="text"
                    readOnly
                    data-target="select-options"
                  />
                  <ul
                    id="select-options"
                    className="dropdown-content select-dropdown"
                    tabIndex="0"
                  >
                    {["玫瑰香味", "扶桑花香味", "茉莉香味"].map(
                      (flavor, index) => (
                        <li
                          key={index}
                          id={`select-options-${index}`}
                          tabIndex="0"
                          className={index === 0 ? "selected" : ""}
                        >
                          <span>{flavor}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <svg
                    className="caret"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M7 10l5 5 5-5z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                  <select tabIndex="-1">
                    <option value="0">玫瑰香味</option>
                    <option value="1">扶桑花香味</option>
                    <option value="2">茉莉香味</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="section-block">
              <div className="inquery-btn">
                <button className="btn" id="submit">
                  ADD CART
                </button>
              </div>
              <div className="inquery-btn">
                <button className="btn" id="submit">
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="body">
              <div className="section-block">
                隨身攜帶的天然清潔防護好幫手！生活中的每一天，都在與有害因子作戰；威脅無所不在，需要全方位的防護，為自己及您所愛的人加一層保障。讓MINEQUO米奈可強化防護力，讓保護無所不在。
              </div>
              <div className="section-block">
                <b>使用說明：</b>
                <p>
                  均勻噴灑欲清潔之物體及部位，加強清潔防護，不需沖洗。注意事項：請避免放置於陽光直射、高溫場所，並以常溫方式保存。如使用時發生身體不適或異常時，請停止使用並立刻就醫。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5>Description</h5>
      <div className="body">
        <b className="section-title">植礦力量</b>
        <p>
          從櫻花樹、玫瑰花、菊花等植物中
          提取天然礦物質成分，透過日本獨家專利技術，將礦物質以介觀的狀態保存下來。介觀狀態的礦物質具有形成電場及帶電的特性，透過電磁波及電力而達成除菌效果!
        </p>
        <Image
          className="responsive-img"
          src="/svg/tech-1.svg"
          alt="植礦力量"
          width={300}
          height={200}
        />
      </div>
      <h5>You May Also Like</h5>
      <div className="products_items">
        {[...Array(6)].map((_, index) => (
          <div className="product_item" key={index}>
            <div className="image-box image-hover">
              <Link href="/product_detail" className="product-item-image">
                <Image
                  className="responsive-img"
                  src="/images/product1.jpg"
                  alt="自然淨化,環境清潔"
                  width={200}
                  height={200}
                />
              </Link>
              <div className="number">{index + 1}</div>
              <div className="name_price info">
                <Link href="#" className="name">
                  <b>介觀植礦防護液</b>
                </Link>
                <b className="price">ntd.450</b>
              </div>
              <div className="en info">
                <small className="en_name">
                  Natural All-Purpose Protective Spray
                </small>
                <small className="ml">50ml / 1.69fl.oz</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="wow fadeInUp index_shop_bg index-shop-online">
        <div className="index_shop_left">
          <div className="index_shop_menu">
            <ul>
              <li>
                <Link href="/product" className="h3">
                  On Line
                </Link>
                <p className="h5">線上購買</p>
              </li>
              <li>
                <Link href="/stories" className="h3">
                  Stores
                </Link>
                <p className="h5">通路展示</p>
              </li>
            </ul>
            <Link href="/product" className="narrow light-color">
              <span>Shop here</span>
              <span className="right-line"></span>
            </Link>
          </div>
        </div>
        <div className="index_shop_right"></div>
      </section>
    </div>
  );
}

export default Product;
