import "../Styles/Styles.css";
import Item from "./Item.jsx";

const styleButton = {
  fontSize: 30,
};

const styleDiv = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Order = ({ items, onAdd, onReduce, showOrder, onOrder }) => {
  let buttonClass = "btn ";
  buttonClass += showOrder ? "btn-danger" : "btn-primary";

  return (
    <div style={styleDiv}>
      <button
        type="button"
        style={styleButton}
        class={buttonClass}
        onClick={onOrder}
      >
        {showOrder ? "Cancel" : "Order Now"}
      </button>
      {showOrder &&
        items.map((item) => {
          return <Item item={item} onAdd={onAdd} onReduce={onReduce} />;
        })}
    </div>
  );
};

export default Order;
