import "../Styles/Styles.css";

const NavBar = ({ order, toggleOrder }) => {
  let buttonClass = "btn ";
  buttonClass += order ? "btn-danger" : "btn-primary";
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Home
          </a>
          <button
            id="btnOrder"
            type="button"
            className={buttonClass}
            onClick={toggleOrder}
          >
            {order ? "Cancel" : "Order Now"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
