import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { getApiResource } from "@ghu/utils/network";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import followers from "./icons/followers.png";
import { NotFound, Loader } from "./components";
import styles from "./Person.module.css";

const RepoList = React.lazy(() => import("./components/RepoList/RepoList"));

const Person = () => {
  const [personName, setPersonName] = useState("");
  const [personId, setPersonId] = useState();
  const [personPhoto, setPersonPhoto] = useState();
  const [personLogin, setPersonLogin] = useState("");
  const [personFollowers, setPersonFollowers] = useState();
  const [personFollowing, setPersonFollowing] = useState();
  const [personLink, setPersonLink] = useState();
  const [personReposNumber, setPersonReposNumber] = useState(0);
  const [personReposUrl, setPersonReposUrl] = useState();

  const storeData = useSelector((state) => state.personReducer);

  const getResponse = async () => {
    const res = await getApiResource(
      `https://api.github.com/users/${storeData}`
    );

    if (res) {
      setPersonId(res.id + 1);
      setPersonName(res.name);
      setPersonPhoto(res.avatar_url);
      setPersonLogin(res.login);
      setPersonFollowing(res.following);
      setPersonFollowers(res.followers);
      setPersonLink(res.html_url);
      setPersonReposUrl(res.repos_url);
      setPersonReposNumber(res.public_repos);
    } else {
    }
  };
  useEffect(() => {
    setPersonId(0);
    getResponse();
  }, [storeData]);
  return (
    <div className={styles.wrapper}>
      {personId ? (
        <>
          <div className={styles.person_info}>
            <Avatar src={personPhoto} size={280} />
            <div className={styles.name}>{personName} </div>
            <div className={styles.login}>
              <a href={personLink} target="_blank" rel="noreferrer">
                {personLogin}
              </a>
            </div>
            <div className={styles.follow}>
              <div>
                <img src={followers} alt="" className={styles.icon} />{" "}
                {personFollowers} followers
              </div>
              <div>
                <UserOutlined className={styles.icon} />
                {personFollowing} following
              </div>
            </div>
          </div>
          <div className={styles.repos}>
            <Suspense fallback={<Loader />}>
              <RepoList
                personReposUrl={personReposUrl}
                personReposNumber={personReposNumber}
              />
            </Suspense>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
export default Person;
