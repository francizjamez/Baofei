import "../Styles/Styles.css";
import { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  calculateTotal = () => {
    const { item } = this.props;
    const { price, orderCount } = item;
    let totalPrice = parseInt(price) * parseInt(orderCount);
    this.setState({ total: totalPrice });
  };

  render() {
    const { item, onAdd, onReduce, onTotal } = this.props;
    const { name, orderCount, price } = item;
    const { total } = this.state;

    return (
      <div id="item">
        <h2 className="itemElement even-spacing">{name}</h2>
        <h2 className="itemElement even-spacing">price : {price}</h2>
        <div className="itemElement even-spacing">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              onReduce(name);
              this.calculateTotal();
              onTotal();
            }}
            disabled={orderCount === 0 ? true : false}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              onAdd(name);
              this.calculateTotal();
              onTotal();
            }}
          >
            +
          </button>
        </div>
        <span
          id="itemNumber"
          className="badge bg-info text-dark itemElement"
          onChange={() => this.calculateTotal}
        >
          {orderCount}
        </span>
        <h2 className="itemElement even-spacing">total: {total}</h2>
      </div>
    );
  }
}

export default Item;
