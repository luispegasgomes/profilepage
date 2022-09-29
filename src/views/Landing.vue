<template>
  <div class="bgBlue d-flex flex-column align-items-center home">
    <div class="d-flex">
      <button
        class="mt-2 fontAsap colorBlue btn btn-light"
        v-on:click="openHorario()"
      >
        Consultar Horário
      </button>
      <button
        class="mt-2 fontAsap colorBlue btn btn-light mx-4"
        v-on:click="openTasks()"
      >
        Ver Tarefas
      </button>
    </div>
    <div v-if="horario">
      <img src="../assets/Horário.png" width="350px" class="mt-2" />
    </div>
    <div v-if="tasks" class="d-flex flex-column align-items-center">
      <h2 class="mt-2 fontBarlow">As minhas tarefas</h2>
      <div><span style="font-weight: bold">Hoje</span> Quarta 28/09</div>

      <div class="d-flex">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <div class="d-flex flex-column mx-3">
          <p style="font-weight: bold">Título da Tarefa</p>
          <p>Descrição da tarefa</p>
          <hr style="height: 3px; width: 500px" />
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <button class="bgBeige colorDarkBlue fontBarlow add">
          Adicionar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  data() {
    return {
      horario: false,
      tasks: true,
    };
  },
  methods: {
    openTasks() {
      this.horario = false;
      this.tasks = true;
    },
    openHorario() {
      this.tasks = false;
      this.horario = true;
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}

.box {
  background-color: #dbc7be;
  border-radius: 12px;
  width: 380px;
}

.add {
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 100px;
}
</style>
