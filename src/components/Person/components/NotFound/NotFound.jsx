import not_found from "./images/not-found.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.layout}>
      <img src={not_found} alt="search" />
    </div>
  );
};

export default NotFound;
