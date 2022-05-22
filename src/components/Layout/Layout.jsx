import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { StartSearch } from "@ghu/components";
import styles from "./Layout.module.css";
import React, { Suspense } from "react";
import { Loader } from "../Loader";
const Person = React.lazy(() => import("../Person/Person"));

const Layout = () => {
  const storeData = useSelector((state) => state.personReducer);

  return (
    <>
      <div className={styles.wrapper}>
        <Suspense fallback={<Loader />}>
          {storeData.length ? <Person /> : <StartSearch />}
        </Suspense>
      </div>
    </>
  );
};

Layout.propTypes = {
  value: PropTypes.string,
};

export default Layout;
