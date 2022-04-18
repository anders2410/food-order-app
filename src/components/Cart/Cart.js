import css from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={css.cartItems}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={css.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]}>Close</button>
        <button className={css.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
