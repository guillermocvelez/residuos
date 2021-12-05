<template>
  <div class="main-dashboard">
    <div class="grid-item">
      <div class="chart-header">
        <img src="../assets/logoChart.svg" alt="logo-chart">
        <p>Residuos orgánicos generados vs aprovechados</p>
      </div>
      <div>
        <p class="chart-date">{{ month }} - {{ new Date().getFullYear()}}</p>
        <pie-chart :data="[['Generados', 73], ['Aprovechados', 27]]" :colors="['#03045E' ,'#61BD00' ]"></pie-chart>
      </div>

      <div class="chart-button-container">
        <button class="btn">ver histórico</button>
      </div> 
    </div>
    <div class="grid-item">
      <div class="chart-header">
        <img src="../assets/logoChart.svg" alt="logo-chart">
        <p>Residuos inorgánicos generados vs aprovechados</p>
      </div>
      <div>
        <p class="chart-date">{{ month }} - {{ new Date().getFullYear()}}</p>
        <pie-chart :data="[['Generados', 18], ['Aprovechados', 82]]" :colors="['#03045E' ,'#61BD00' ]"></pie-chart>
      </div>

      <div class="chart-button-container">
        <button class="btn">ver histórico</button>
      </div>
    </div>
    <div class="grid-item">
      <div class="chart-header">
        <img src="../assets/logoChart.svg" alt="logo-chart">
        <p>Reporte mensual</p>
      </div>
      <div>
        <p class="chart-date">{{ month }} - {{ new Date().getFullYear()}}</p>
        <column-chart
          :stacked="true"
          :data="[
            ['Enero', 10],
            ['Febrero', 15] ,
            ['Marzo', 15],
            ['Abril', 12],
            ['Mayo', 18],
            ['Junio', 11],
            ['Julio', 16],
            ['Agosto', 15],
            ['Septiembre', 13],
            ['Octubre', 22],
            ['Noviembre', 15],
            ['Diciembre', 25]]"
          :colors="['#203D00']"
        ></column-chart>
      </div>
       <div class="chart-button-container">
        <button class="btn">ver histórico</button>
      </div>
      
    </div>
  </div>
</template>



<script>

export default {

  name: "dashboards",


  computed:{
    month(){
      if ( (new Date().getMonth()) === 0) return 'Enero';
      else if ( (new Date().getMonth()) === 1) return 'Febrero';
      else if ( (new Date().getMonth()) === 2) return 'Marzo';
      else if ( (new Date().getMonth()) === 3) return 'Abril';
      else if ( (new Date().getMonth()) === 4) return 'Mayo';
      else if ( (new Date().getMonth()) === 5) return 'Junio';
      else if ( (new Date().getMonth()) === 6) return 'Julio';
      else if ( (new Date().getMonth()) === 7) return 'Agosto';
      else if ( (new Date().getMonth()) === 8) return 'Septiembre';
      else if ( (new Date().getMonth()) === 9) return 'Octubre';
      else if ( (new Date().getMonth()) === 10) return 'Noviembre';
      else if ( (new Date().getMonth()) === 11) return 'Diciembre';

      return 'Nada'
    }
  }

}
</script>

<style scoped>
.main-dashboard{
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-column-gap: 32px;
 justify-content: center;
 align-items: center;
 align-content: center;
  height: 100%;
}

.grid-item {
  justify-content: center;
  align-content: center;
  height: 100%;
  justify-self: center;
  background-color:#A4C87E;
  padding:16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  border-radius: 16px;
}
.chart-header{
  display: flex;
  gap: 16px;
  color: white;
  margin-bottom: 48px;
}
.chart-date{
  text-align: center;
  color: white;
  font-weight: 800;
}
.chart-button-container{
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 64px;
}

.btn {
  padding: 8px 32px;
  border-radius: 8px;
  border: none;
  background-color: #203D00;
  color: white;
  font-weight: 800;
  cursor: pointer;
}
.btn:active{
  transform: scale(0.95);
}
</style>
