<template>
  <section class="producidos">
        <h3 class="box-title"><slot></slot></h3>        
        <p class="date-container">Mes: {{new Date().getMonth()}} - Dia: {{ new Date().getDay()}}</p>
        <div class="btn-container">
          <button class="btn add-btn" @click="addInput">Agregar campo</button>
          <button class="btn reset-btn" @click="resetInputs">Reset</button>
        </div>

        <form 
          @submit="sendProducidos"
          class="inputs-form">
          <div>
            <div
              v-for="(input,idx) in inputs"
              :key="idx"
              class="input-container"
            >
              <div class="tipo-residuo">
                <label>Tipo de residuo</label>
                <input @blur="addResidue" type="text">
              </div>
              <div class="tipo-residuo">
                <label for="">Cantidad en kg</label>
                <input @blur="addTotal" type="number">
              </div>
            </div>
          </div>
          
          <div class="total-container">
            <h3 class="total-text">Total = {{total.reduce((previus,current) => parseInt(previus) + parseInt(current)) }} Kg</h3>
            <button class="btn send-btn">Enviar información</button>

          </div>
        </form>

        
    </section>
</template>

<script>
export default {
  name: 'InputBox',

  data() {
    return {
      inputs: 0,
      residues: [],
      total:[0],
    }
  },

    methods:{
    addInput(){
      this.inputs += 1;
    },
    resetInputs(){
      this.inputs = 0;
      this.total = [0];
      this.residues = []
    },
    addTotal(event){
      this.total.push(event.target.value)
    },

    addResidue(event){
      this.residues.push(event.target.value)
    },
    sendProducidos(){
      this.resetInputs()
    }

  }


}
</script>

<style scoped>
.producidos, .aprovechados {
  width: 100%;
  min-height: 100%;
  background-color: #A4C87E;
  border-radius: 16px;
  padding:16px; 
}

.box-title {
  color: #4F524C;
  margin-bottom: 32px;
}
.date-container {
  color: #4F524C;
  margin-bottom: 16px;
}

.input-container{
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.tipo-residuo{
  display: flex;
  flex-direction: column;
}
label{
  color: #4F524C;
  margin-bottom: 8px;
  font-weight: 500;
}
input{
  border-radius: 16px;
  border:none;
  outline: none; 
  height: 24px;
}
.btn-container {
  margin-bottom: 16px;
}
.btn{
  padding: 8px 16px;
  border-radius: 8px;
  border:none;
  outline: none;
  cursor: pointer;
  font-weight: 700;
}
.add-btn {
  background-color: green;
  color: white;
  margin-right: 32px;
}
.reset-btn {
  background-color: rgb(0, 82, 206);
  color: white;
}
.total-container {
  display: flex;
  justify-content: space-between;
}
.total-text {
  color: #4F524C;
} 
</style>