<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212d3a;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #71975bcc;
}

nav a.router-link-exact-active {
  color: #0f1f06f3;
}
body {
  background-color: #19aed38c;
}

button {
  background-color: #8D919B;
  border-radius: 10px;
  font-size: larger;
}


button {
  background-color: #363f50c9;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 0.7em 1.5em;
  font-size: larger;
  cursor: pointer;
  transition: background-color 0.7s ease, transform 0.3s ease;
}

button:hover {
  background-color: #1d2127c9;
  transform: translateY(-2px);
}
</style>
