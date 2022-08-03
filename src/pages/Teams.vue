<template>
  <div class="Teams dosis-500 ">
    <div class="row q-ma-lg text-h4 dosis-600 text-primary">
      Equipe
    </div>
    <div class="row q-mt-md justify-center" style="width:100%">
      <div class="col-4 q-ml-md">
        <q-card>
          <div class="row q-mx-md q-pt-md items-center text-h5 text-primary" style="width:100%">
          Cadastrar novo membro
        </div>
          <div class="row q-ma-md" >
            <q-input v-model="team.name" type="text" label="Nome" style="width: 100%"/>
          </div>
          <div class="row q-ma-md">
            <q-input v-model="team.role" type="text" label="Função" style="width: 100%" />
          </div>
          <q-btn color="primary" class="q-ma-md" icon="add" label="Adicionar" @click="submitTeamMate()" />
        </q-card>
      </div>
      <div class="col q-mx-md">
        <q-table
        class="q-px-md"
        :filter="filter"
        :rows="rows"
        :columns="columns"
        style="width:100%"
        row-key="name"
        >
          <template v-slot:top>
          <div class="text-h5 text-primary">
            Equipe existente
          </div>
          <q-space />
          <q-input dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          </template>

           <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <div v-if="props.expand === false">
              {{ props.row.name }}
            </div>
            <div v-else>
              <q-input v-model="update.name" @blur="updateTeamMate(props)" type="text"/>
            </div>
          </q-td>
          <q-td key="role" :props="props">
            <div v-if="props.expand  === false">
              {{ props.row.role }}
            </div>
            <div v-else>
              <q-input v-model="update.role"  @blur="updateTeamMate(props)" type="text"/>
            </div>
          </q-td>
          <q-td key="action" :props="props">
              <div>
                <q-btn class="q-mx-xs" color="primary" icon="edit" @click="editTeamMate(props)" size="sm" round/>
                <q-btn class="q-mx-xs" color="primary" icon="delete" @click="deleteTeamMate(props)" size="sm" round />
              </div>
            </q-td>
        </q-tr>
      </template>
        </q-table>
     </div>
    </div>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Nome',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'role', label: 'Função',  field: row => row.role,
    format: val => `${val}`, sortable: true },
  { name: 'action', label: '' },
]


export default {
  data () {
    return {
      update: {},
      editRow:[],
      team: {
        name:'',
        role:'',
      },
      columns,
      rows: [],
      filter: null,
      form: {
        color1: '#9C27B0',
        color2: '#21BA45',
        color3: '#F2C037',
      }

    }
  },
  mounted () {
    this.loadTeam()
  },
  methods: {
    loadTeam () {
      const url = 'team'
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
      api({
        method: "get",
        url: url,
        headers: params
      })
        .then(response => {
        this.rows = response.data;
        this.$forceUpdate();
      })
        .catch(error => {
        this.loading = false;
        console.log(error.response)
      });
    },
    submitTeamMate() {
      const url = 'team'
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
      api({
        method: "post",
        url: url,
        headers: params,
        data: this.team
      })
        .then(response => {
        this.loading = false;
        this.rows = response.data;
        this.$forceUpdate();
        this.resetForm ();
      })
        .catch(error => {
        this.loading = false;
        console.log(error.response)
      });
    },
    resetForm () {
      this.team = {
        name: '',
        role: ''
      }
    },

    editTeamMate (val) {
      val.expand = true
      this.update.id = val.row.id
      this.update.name = val.row.name
      this.update.role = val.row.role
    },
     updateTeamMate (val) {
      val.expand = false
      api({
        method: "put",
        url: "team/" + val.row.id,
        data: this.update
      })
        .then(response => {
        this.rows = response.data
      })
        .catch(error => {
        console.log(error.response)
      })
    },
    deleteTeamMate (val) {
      val.expand = false
      api({
        method: "delete",
        url: "team/" + val.row.id
      })
        .then(response => {
        this.rows = response.data
      })
        .catch(error => {
        console.log(error.response)
      })
    }
  }
}
</script>

<style>

</style>
