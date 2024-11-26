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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

/* footer styling */
main {
  flex: 1;
}

footer {
  margin-top: 24px;
  background-color: rgb(112, 112, 112);
  color: black;
  padding: 10px;
  text-align: center;
}

body {
  margin: 0px;
}

/* header styling */
nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  background-color: rgba(138, 181, 231, 0.637);
  margin-bottom: 1.2em;
}

nav a {
  font-weight: bold;
  color: #4968f0e7;
  text-decoration: none;
  padding-left: 5px;
  padding-right: 5px;
}

nav a.router-link-exact-active {
  color: #0f1f06f3;
  text-decoration: underline;
}

body {
  background-color: #19aed38c;
}

/* button styling */
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
