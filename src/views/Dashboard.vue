<template>
  <div class="dashboard grey darken-3">
    <v-row>
      <v-card flat>
        <v-tabs
          background-color="dashboard grey darken-3"
          center-active
          dark
        >
          <v-tab>MONITOR</v-tab>
          <v-tab>GRÁFICO</v-tab>
          <v-tab>ATENDIMENTOS</v-tab>
        </v-tabs>
      </v-card>
    </v-row>

    <v-container>
      <v-row>
        <v-col>
          {{ countAvailable / bufferScale }} Disponível
          <v-progress-linear
            v-model="countAvailable"
            color="green accent-4"
          ></v-progress-linear>
        </v-col>
        <v-col>
          {{ countUnavailable / bufferScale }} Atendendo
          <v-progress-linear
            v-model="countUnavailable"
            color="red accent-4"
          ></v-progress-linear>
        </v-col>
        <v-col>
          {{ countPaused / bufferScale }} Pausa
          <v-progress-linear
            v-model="countPaused"
            color="yellow accent-4"
          ></v-progress-linear>
        </v-col>
        <v-col>
          {{ countDisconnected / bufferScale }} Desconectado
          <v-progress-linear
            v-model="countDisconnected"
            color="white accent-4"
          ></v-progress-linear>
        </v-col>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="agents"
        item-key="id"
        show-select
        hide-default-footer
        class="elevation-1"
      >
        <template v-slot:item="props">
          <tr :class="`white--text agent ${getRowColor(props.item)}`">
            <td><v-checkbox></v-checkbox></td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.status }}</td>
            <td>{{ props.item.time }}</td>
            <td></td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import jsonData from '../data/data.json'

export default {
    data: () => ({
        headers: [
          { text: 'Nome', value: 'name' },
          { text: 'Id', value: 'id' },
          { text: 'Status', value: 'status' },
          { text: 'Tempo', value: 'time' },
          { text: 'Quantidade', value: '' },
        ],
        agents: [],
        countAvailable: 0,
        countUnavailable: 0,
        countPaused: 0,
        countDisconnected: 0,
        bufferScale: 50,
    }),
    created: function() {
      this.agents = jsonData[0].members
      this.calculateStatistics()
    },
    methods: {
      calculateStatistics: function() {
        this.countAvailable = this.bufferScale * this.agents.reduce((acc, a) => (a.online && !a.paused ? acc+1 : acc), 0)
        this.countUnavailable = this.bufferScale * this.agents.reduce((acc, a) => (a.online && a.paused ? acc+1 : acc), 0)
        this.countPaused = this.bufferScale * this.agents.reduce((acc, a) => (a.paused ? acc+1 : acc), 0)
        this.countDisconnected = this.bufferScale * this.agents.reduce((acc, a) => (!a.online ? acc+1 : acc), 0)
      },
      getRowColor: function(item) {
        if (item.online && !item.paused) {
          return 'available'
        } else if (item.online && item.paused) {
          return 'unavailable'
        } else if (item.paused) {
          return 'paused' 
        } else {
          return 'disconnected'
        }
      },
    },
}
</script>

<style>
.agent.available {
  background-color: #66fa66;
}

.agent.unavailable {
  background-color: #e92c2c;
}

.agent.paused {
  background-color: #e6e92c;
}

.agent.disconnected {
  background-color: #a3a3a3;
}
</style>
