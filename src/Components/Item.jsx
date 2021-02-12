import "../Styles/Styles.css";

const styleDiv = {
  display: "flex",
  alignItems: "center",
};

const styleElement = {
  fontSize: 40,

  marginTop: 10,
  margintLeft: 50,
  marginRight: 50,
  marginBottom: 10,

  paddingTop: 0,
  paddingBottom: 0,
};

const Item = ({ item, onAdd, onReduce }) => {
  const { name, orderCount } = item;
  console.log(name);
  return (
    <div style={styleDiv}>
      <h1 style={styleElement}>{name}</h1>
      <button
        style={styleElement}
        type="button"
        class="btn btn-secondary"
        onClick={() => onReduce(name)}
        disabled={orderCount === 0 ? true : false}
        // {orderCount === 0 && "disabled"}
      >
        -
      </button>

      <button
        style={styleElement}
        type="button"
        class="btn btn-dark"
        onClick={() => onAdd(name)}
      >
        +
      </button>

      <span style={styleElement} class="badge bg-info text-dark">
        {orderCount}
      </span>
    </div>
  );
};

export default Item;
