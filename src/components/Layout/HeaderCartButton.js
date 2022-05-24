import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import css from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import cartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cart = useContext(CartContext);
  const { items } = cart;

  const numberOfCardItems = items.reduce(
    (currentValue, item) => currentValue + item.amount,
    0
  );

  const btnClasses = `${css.button} ${buttonIsHighlighted ? css.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={css.badge}>{numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCartButton;
