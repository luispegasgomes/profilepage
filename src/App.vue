<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Asap:wght@600&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900");

:root {
  --white: #F4F4F9;
  --black: #000000;
  --grey: #ede9ec;
  --darkBlue: #102B3F;
  --blue: #95ADB6;
  --beige: #DBC7BE;
  --orange: #FFBE0B;
}

body,
body * {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow-x: hidden;
}

body,
#app {
  min-width: 100vw;
  min-height: 100vh;
}

.fontAsap {
  font-family: "Asap", sans-serif;
}

.fontBarlow {
  font-family: "Barlow", sans-serif;
}

.fontNunito {
  font-family: "Nunito", sans-serif;
}

.weightLight {
  font-weight: 300;
}

.weightRegular {
  font-weight: 300;
}

.weightBold {
  font-weight: 700;
}

.colorWhite {
  color: var(--white);
}

.colorBlack {
  color: var(--black);
}

.colorGrey {
  color: var(--grey);
}

.colorDarkBlue {
  color: var(--darkBlue);
}

.colorOrange {
  color: var(--orange);
}

.colorBlue {
  color: var(--blue);
}

.colorBeige {
  color: var(--beige);
}

.bgWhite {
  background: var(--white);
}

.bgBlack {
  background: var(--black);
}

.bgGrey {
  background: var(--grey);
}

.bgDarkBlue {
  background: var(--darkBlue);
}

.bgBlue {
  background: var(--blue);
}

.bgBeige {
  background: var(--beige);
}

.bgOrange {
  background: var(--orange);
}
</style>
