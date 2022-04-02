<script>
export default {
   name: "App",
};
</script>

<template>
   <div id="app">
      <img alt="Vue logo" src="./assets/logo.png" />
      <div class="counter">
         <label>{{ $store.getters.getCounter }}</label>
      </div>
      <div class="buttons">
         <button @click="$store.dispatch('decreaseCounter')" class="button">-2</button>
         <button @click="$store.dispatch('increaseCounter')" class="button">+2</button>
      </div>
   </div>
</template>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
.counter {
   font-size: 80px;
   margin: 10px;
}
.buttons .button {
   font-size: 24px;
   width: 80px;
   padding: 10px;
   cursor: pointer;
   margin: 0px 10px;
}
</style>
