const CartItem = ({cartItem}) => {
    const {name, price, quantity} = cartItem
  return (
    <div className="cart-item-container">
      <h3 className="name">{name}</h3>
      <span className="price">
        {quantity} X ${price}
      </span>
    </div>
  );
};

export default CartItem;
