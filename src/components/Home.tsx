import React from 'react';

const tab = [1, -2, 7, -6];
export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h3>[{ tab.map((e, i) => i===0 ? e: ','+e) }] sorted gives [{tab.sort((a,b) => a-b).map((e, i) => i===0 ? e: ','+e)}]</h3>
      <h4>what the fuck !!!!</h4>
    </>

  )
}