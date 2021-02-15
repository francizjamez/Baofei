import Header from "./Components/Header.jsx";
import NavBar from "./Components/NavBar.jsx";
import Order from "./Components/Order.jsx";
import React, { useState } from "react";
import "./Styles/Styles.css";

function App() {
  const [order, setOrder] = useState(false);
  const [items, setItems] = useState([
    {
      name: "milk tea",
      orderCount: 0,
      price: 65,
      total: 0,
    },
    {
      name: "tea of tears",
      orderCount: 0,
      price: 100,
      total: 0,
    },
    {
      name: "Frenchies",
      orderCount: 0,
      price: 45,
      total: 0,
    },
  ]);

  const addItem = (name) => {
    let newItems = items.map((item) => {
      if (item.name === name) {
        item.orderCount++;
        console.log(item.name, item.orderCount);
      }
      return item;
    });
    setItems(newItems);
  };

  const reduceItem = (name) => {
    let newItems = items.map((item) => {
      if (item.name === name) {
        item.orderCount--;
        if (item.orderCount < 0) {
          item.orderCount = 0;
        }
      }
      return item;
    });

    setItems(newItems);
  };

  const toggleOrder = () => {
    setOrder(!order);
  };

  let buttonClass = "btn ";
  buttonClass += order ? "btn-danger" : "btn-primary";

  return (
    <div className="main">
      <NavBar />
      <Header className="header" />
      <button
        id="btnOrder"
        type="button"
        className={buttonClass}
        onClick={toggleOrder}
      >
        {order ? "Cancel" : "Order Now"}
      </button>
      <Order
        items={items}
        onAdd={addItem}
        onReduce={reduceItem}
        showOrder={order}
        onOrder={toggleOrder}
      />
    </div>
  );
}

export default App;
