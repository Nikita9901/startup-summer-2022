import PropTypes from "prop-types";
import styles from "./Repo.module.css";

const Repo = ({ name, description, url }) => {
  return (
    <>
      <a href={url} target="_blank">
        <li className={styles.list_item}>
          <p className={styles.name}>{name}</p>

          <p className={styles.description}>{description}</p>
        </li>
      </a>
    </>
  );
};

Repo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default Repo;
