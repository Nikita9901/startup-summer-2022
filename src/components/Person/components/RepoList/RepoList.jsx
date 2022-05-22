import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Pagination } from "antd";
import { getApiResource } from "@ghu/utils/network";
import { Repo } from "../Repo";
import no_repo from "./images/no-repo.png";
import styles from "./RepoList.module.css";

const RepoList = ({ personReposUrl, personReposNumber }) => {
  const [personRepos, setPersonRepos] = useState([]);
  const getRepos = async (page) => {
    const resRepo = await getApiResource(
      `${personReposUrl}?per_page=4&page=${page}`
    );
    if (resRepo) {
      const res = resRepo.map(({ name, description, html_url }) => {
        return {
          name,
          description,
          html_url,
        };
      });
      setPersonRepos(res);
    }
  };

  const [page, setPage] = useState({
    current: 1,
    minIndex: 0,
    maxIndex: 4,
  });

  useEffect(() => {
    getRepos(page.current);
  }, [personReposUrl, page]);

  const changePage = (page) => {
    setPage({
      current: page,
      minIndex: (page - 1) * 4,
      maxIndex: page * 4 > personReposNumber ? personReposNumber : page * 4,
    });
  };

  return (
    <div className={styles.wrapper}>
      {personReposNumber ? (
        <>
          <p>Repositories ({personReposNumber})</p>
          <ul className={styles.list_container}>
            {personRepos.map((el, index) => (
              <Repo
                key={index}
                name={el.name}
                description={el.description}
                url={el.html_url}
              />
            ))}
          </ul>
          <div className={styles.pagination}>
            <p className={styles.pages}>
              {page.minIndex + 1}-{page.maxIndex} of {personReposNumber} items
            </p>
            <Pagination
              defaultCurrent={1}
              total={personReposNumber}
              pageSize={4}
              onChange={changePage}
              showSizeChanger={false}
              showLessItems={true}
              responsive={false}
              size="small"
            />
          </div>
        </>
      ) : (
        <div className={styles.no_repo}>
          <img src={no_repo} alt="" className={styles.image} />
        </div>
      )}
    </div>
  );
};

RepoList.propTypes = {
  personReposUrl: PropTypes.string,
};

export default RepoList;
