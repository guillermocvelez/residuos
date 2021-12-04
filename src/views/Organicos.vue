<template>
  <div class="main-organicos">
      <InputBox> Residuos Orgánicos producidos</InputBox>
      <InputBox> Residuos Orgánicos Aprovechados</InputBox>
  </div>
</template>

<script>
import InputBox from '../components/InputBox.vue'


export default {

  name: "Organicos",
  components: {
    InputBox
  },

  


};


</script>

<style scoped>
.main-organicos{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap:16px ;
  height: 100%;
}





</style>
