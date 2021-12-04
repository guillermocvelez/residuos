<template>
  <div class="main-header">
    <div class="header-container">
      <img src="@/assets/Logo.svg" alt="">
      <h1 class="header-title">Calculadora de residuos</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-header{
  width: 100vw;
  height: 100px;
  background-color: var(--main-green);
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
.header-container {
  color: white;
  width: 1024px;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;  
}
.header-title{
  margin-left: 16px;
 
}

</style>