import React from "react";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header>
      <div id="nav-bar">
        <nav>
          <div className="container nav-wrapper">
            <Link href="/" className="brand-logo">
              自然淨化,環境清潔
            </Link>
            <div className="menu-wrapper scoll-down-show">
              <ul className="nav-menu hide-on-med-and-down">
                <li>
                  <Link href="/pages/about">關於我們</Link>
                </li>
                <li className="active">
                  <Link href="/items">產品介紹</Link>
                </li>
                <li>
                  <Link href="/news">最新消息</Link>
                </li>
                <li>
                  <Link href="/technologies">技術說明</Link>
                </li>
                <li>
                  <Link href="/contacts/new">聯絡我們</Link>
                </li>
              </ul>
            </div>
            <ul className="nav-cart right">
              <li>
                <i className="material-icons prefix">search</i>
              </li>
              <li>
                <Link href="/login">
                  <i className="material-icons prefix hide-on-med-and-up">
                    person
                  </i>
                  <span className="hide-on-med-and-down">登入/註冊</span>
                </Link>
              </li>
              <li className="preicon-links shopping-cart">
                <Link href="#!" className="mini-cart">
                  <span className="circle">0</span>
                  <i className="material-icons">shopping_cart</i>
                </Link>
              </li>
            </ul>
            <div id="burger" className="burger default hide-on-large-only">
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
        <div className="nav-overlay">
          <div className="container">
            <Link href="/" className="brand-logo">
              自然淨化,環境清潔
            </Link>
            <div id="burger-active" className="burger right active">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="menu">
              <li>
                <Link href="/pages/about">關於我們</Link>
              </li>
              <li>
                <Link href="/items">產品介紹</Link>
              </li>
              <li>
                <Link href="/news">最新消息</Link>
              </li>
              <li>
                <Link href="/technologies">技術說明</Link>
              </li>
              <li>
                <Link href="/contacts/new">聯絡我們</Link>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
