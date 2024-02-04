import { useNavigate } from "react-router-dom";


import styles from "./home.module.css";

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    // later
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1>Welcome!</h1>
      </div>
      <div>
        <p>This is home page. </p>
      </div>
      <div className={styles.buttonContainer}>
        <input
          className={styles.inputButton}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? "Log out" : "Log in"}
        />
        {loggedIn ? <p>Your email is {email}</p> : <></>}
      </div>
    </div>
  );
};

export default Home;
