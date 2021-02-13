import "../Styles/Styles.css";

const styleDiv = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 3fr",
  marginLeft: "2rem",
  marginRight: "2rem",
};

const styleName = {};

const styleButtons = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
};

const stylePerButton = {
  width: "50px",
  height: "50px",
};

const styleNumber = {
  justifySelf: "right",
  fontSize: "2rem",
};

const Item = ({ item, onAdd, onReduce }) => {
  const { name, orderCount } = item;
  console.log(name);
  return (
    <div>
      <hr />
      <div style={styleDiv}>
        <h2 style={styleName}>{name}</h2>
        <h3>price : item.price</h3>

        <div style={styleButtons}>
          <div></div>
          <button
            style={stylePerButton}
            type="button"
            class="btn btn-secondary"
            onClick={() => onReduce(name)}
            disabled={orderCount === 0 ? true : false}
          >
            -
          </button>
          <button
            style={stylePerButton}
            type="button"
            class="btn btn-dark"
            onClick={() => onAdd(name)}
          >
            +
          </button>
          <div></div>
        </div>
        <span style={styleNumber} class="badge bg-info text-dark">
          {orderCount}
        </span>
      </div>
      <hr />
    </div>
  );
};

export default Item;
