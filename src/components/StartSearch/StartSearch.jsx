import search from "./images/search.png";
import styles from "./StartSearch.module.css";

const StartSearch = () => {
  return (
    <>
      <div className={styles.layout}>
        <img src={search} alt="search" />
      </div>
    </>
  );
};
export default StartSearch;
