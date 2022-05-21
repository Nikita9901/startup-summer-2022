import PropTypes from "prop-types";
import { Repo } from "../Repo";
import styles from "./RepoList.module.css";
import { getApiResource } from "@ghu/utils/network";
import { Pagination } from "antd";
import { useState, useEffect } from "react";

const RepoList = ({ personReposUrl }) => {
  const [personRepos, setPersonRepos] = useState([]);
  useEffect(() => {
    (async () => {
      const resRepo = await getApiResource(personReposUrl);
      if (resRepo) {
        setPersonRepos(
          resRepo.map(({ name, description, html_url }) => {
            return {
              name,
              description,
              html_url,
            };
          })
        );
      }
    })();
  }, []);

  const [page, setPage] = useState({
    current: 1,
    minIndex: 0,
    maxIndex: 4,
  });
  const changePage = (page, pageSize) => {
    setPage({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  return (
    <div className={styles.wrapper}>
      <p>Repositories ({personRepos.length})</p>
      <ul className={styles.list_container}>
        {personRepos.map(
          (el, index) =>
            index >= page.minIndex &&
            index < page.maxIndex && (
              <Repo
                key={index}
                name={el.name}
                description={el.description}
                url={el.html_url}
              />
            )
        )}
      </ul>
      <Pagination
        defaultCurrent={1}
        total={personRepos.length}
        pageSize={4}
        onChange={changePage}
        className={styles.pagination}
      />
    </div>
  );
};

RepoList.propTypes = {
  url: PropTypes.string,
};

export default RepoList;
