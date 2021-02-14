import "../Styles/Styles.css";
import Item from "./Item.jsx";

const Order = ({ items, onAdd, onReduce, showOrder, onOrder }) => {
  return (
    <div id="orderForm">
      {showOrder &&
        items.map((item) => {
          return <Item item={item} onAdd={onAdd} onReduce={onReduce} />;
        })}
    </div>
  );
};

export default Order;
