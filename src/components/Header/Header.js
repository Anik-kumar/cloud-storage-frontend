
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h2>(Header) Cloud Storage</h2>
      <nav>
        <ul className={styles.linkContainer}>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/login"}>Login</NavLink></li>
          <li><NavLink to={"/register"}>Register</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
