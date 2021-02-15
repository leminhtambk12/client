<template>
  <div id="app">
    <div id="header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#header {
  height: 70px;
  background: rgb(87, 85, 85);
  text-align: center;
  font-size: 2.5rem;
  padding: 10px;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>
