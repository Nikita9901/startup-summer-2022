import loader from "./img/loader-blue.svg";
import styles from "./Loader.module.css";

const Loader = () => {
  return <img src={loader} alt="loading..." className={styles.loader} />;
};
export default Loader;
