import { getApiResource } from "@ghu/utils/network";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import followers from "./icons/followers.png";
import { NotFound, Loader } from "./components";
import styles from "./Person.module.css";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";

const RepoList = React.lazy(() => import("./components/RepoList/RepoList"));

const Person = () => {
  const [personName, setPersonName] = useState("");
  const [personPhoto, setPersonPhoto] = useState();
  const [personLogin, setPersonLogin] = useState("");
  const [personFollowers, setPersonFollowers] = useState();
  const [personFollowing, setPersonFollowing] = useState();
  const [personLink, setPersonLink] = useState();
  // const [personRepos, setPersonRepos] = useState();
  const [personReposUrl, setPersonReposUrl] = useState();

  const storeData = useSelector((state) => state.personReducer);

  const getResponse = async () => {
    const res = await getApiResource(
      "https://api.github.com/users/" + storeData
    );

    if (res) {
      setPersonName(res.name);
      setPersonPhoto(res.avatar_url);
      setPersonLogin(res.login);
      setPersonFollowing(res.following);
      setPersonFollowers(res.followers);
      setPersonLink(res.html_url);
      setPersonReposUrl(res.repos_url);
      // const resRepo = await getApiResource(res.repos_url);
      // if (resRepo) {
      //   setPersonRepos(
      //     resRepo.map(({ name, description, html_url }) => {
      //       return {
      //         name,
      //         description,
      //         html_url,
      //       };
      //     })
      //   );
      // }
    } else {
    }
  };
  useEffect(() => {
    setPersonName("");
    getResponse("/" + storeData);
  }, [storeData]);
  return (
    <div className={styles.wrapper}>
      {personName ? (
        <>
          <div className={styles.person_info}>
            <Avatar src={personPhoto} size={280} className={styles.avatar} />
            <div className={styles.name}>{personName} </div>
            <div className={styles.login}>
              <a href={personLink} target="_blank">
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
              <RepoList personReposUrl={personReposUrl} />
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
