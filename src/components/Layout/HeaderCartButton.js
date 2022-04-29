import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";

import css from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cart = useContext(CartContext);

  const numberOfCardItems = cart.items.reduce(
    (currentValue, item) => currentValue + item.amount,
    0
  );

  return (
    <button className={css.button} onClick={onClick}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={css.badge}>{numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCartButton;
