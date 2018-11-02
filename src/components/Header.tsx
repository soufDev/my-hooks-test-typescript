import { Menu, Icon } from 'antd';
import React, { useState } from 'react';

const Item = Menu.Item;

export default function Header() {
  const [current, setCurrent] = useState<string>('home');
  function onChange(e: { key: string }) {
    console.log({ e });
    setCurrent(e.key);
  }
  return (
    <Menu
      selectedKeys={[current]}
      theme={"light"}
      mode={"horizontal"}
      onClick={onChange}
    >
      <Item key="home">
        <Icon type="home" />
        Home
      </Item>
      <Item key="user">
        <Icon type="user" />
        User
      </Item>
    </Menu>
  )
}