import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import logo from "./images/logo.png";
import { useDispatch } from "react-redux";
import { searchPerson } from "@ghu/store/actions";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  window.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Enter") {
        const value = event.target.value;
        dispatch(searchPerson(value));
      }
    },
    true
  );
  const event = new KeyboardEvent("keydown", {
    view: window,
    key: "Enter",
  });
  const searchButtonPhone = () => {
    document.querySelector("input").dispatchEvent(event);
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <Input
        className={styles.input}
        size="large"
        placeholder="Enter GitHub username"
        prefix={<SearchOutlined className={styles.icon} />}
      />
      <div onClick={searchButtonPhone} className={styles.button}>
        search
      </div>
    </div>
  );
};

export default Header;
