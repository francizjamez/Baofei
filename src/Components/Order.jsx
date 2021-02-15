import "../Styles/Styles.css";
import Item from "./Item.jsx";
import { useState } from "react";

const Order = ({ items, onAdd, onReduce, showOrder, onOrder }) => {
  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    let total = items.reduce((a, c) => {
      const { orderCount, price } = c;
      return a + orderCount * price;
    }, 0);
    setTotal(total);
  };
  return (
    <div id="orderForm">
      {showOrder &&
        items.map((item) => {
          return (
            <Item
              item={item}
              onAdd={onAdd}
              onReduce={onReduce}
              onTotal={handleTotal}
            />
          );
        })}
      {showOrder && (
        <div id="orderTotal">
          <h2 class="totalElement">Total: P{total}.00</h2>
        </div>
      )}
    </div>
  );
};

export default Order;
