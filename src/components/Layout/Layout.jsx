import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Person, StartSearch } from "@ghu/components";
import styles from "./Layout.module.css";

const Layout = () => {
  const storeData = useSelector((state) => state.personReducer);

  return (
    <>
      <div className={styles.wrapper}>
        {storeData.length ? <Person /> : <StartSearch />}
      </div>
    </>
  );
};

Layout.propTypes = {
  value: PropTypes.string,
};

export default Layout;
