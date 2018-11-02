import { Menu, Icon } from "antd";
import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Item = Menu.Item;

export default function Header() {
  const [current, setCurrent] = useState<string>("home");
  function onChange(e: { key: string }) {
    console.log({ e });
    setCurrent(e.key);
  }
  return (
    <Router>
      <Menu
        selectedKeys={[current]}
        theme={"light"}
        mode={"horizontal"}
        onClick={onChange}
      >
        <Item key="home">
          <Link to="/home">
            <Icon type="home" />
            Home
          </Link>
        </Item>
        <Item key="user">
          <Link to="/user">
            <Icon type="user" />
            User
          </Link>
        </Item>
      </Menu>
    </Router>
  );
}
