import "../Styles/Styles.css";

const Item = ({ item, onAdd, onReduce }) => {
  const { name, orderCount } = item;
  console.log(name);
  return (
    <div id="item">
      <h2 className="itemElement">{name}</h2>
      <h3 className="itemElement">price : item.price</h3>
      <div className="itemElement">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onReduce(name)}
          disabled={orderCount === 0 ? true : false}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => onAdd(name)}
        >
          +
        </button>
      </div>
      <span id="itemNumber" className="badge bg-info text-dark itemElement">
        {orderCount}
      </span>
    </div>
  );
};

export default Item;
