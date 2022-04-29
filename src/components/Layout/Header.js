import React from "react";

import mealsImage from "../../assets/meals.jpg";
import css from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={css.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={css.mainImage}>
        <img src={mealsImage} alt="Of meals" />
      </div>
    </>
  );
};

export default Header;
