<template>  
  <div class="main">
    <header>
      <Header/>
    </header>

    <nav clas="nav">
      <router-link to="/">Residuos orgánicos</router-link> |
      <router-link to="/inorganicos">Residuos inorgánicos</router-link> |
      <router-link to="/dashboards">Dashboards</router-link>
    </nav>

    <main class="main-container">      
      <router-view />      
    </main>
  </div>

  
</template>

<script>
import Header from './components/Header'
export default {

  components:{
    Header
  },
  setup() {
    
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {
  --main-green: #1C9637;
}
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F9F9F9;
}
.nav{
  width: auto;
  margin-top: 16px;
}
.main-container{
  margin-top: 32px;
  width: 1024px;
  height: 100vh;
  padding-bottom: 128px;
  
}



</style>
