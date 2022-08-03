<template>
  <div class="InProgress dosis-500">
    <div class="row q-mt-md justify-center" style="width:100%">
      <q-table
        class="q-mx-md"
        :rows="rows"
        :columns="columns"
        style="width:100%"
        row-key="name"
      >
       <template v-slot:top>
        <div class="row q-ma-md text-h4 dosis-600 text-primary">
         Projetos Em Andamento
        </div>
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" class="bg-primary text-white" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
          <div class="text-left">
            <q-list >
              <q-item v-for="element in props.row.stages"  :key="element.id" dense v-ripple class="q-ma-xs" style="border:1px solid; border-color: #34BABA; border-radius: 5px;">
                <q-badge :style="'background-color: '+ element.color" class="text-black q-mt-xs" style="width:20px; height:20px">
              </q-badge>
                <q-item-section class="q-ml-xs">{{element.name}}</q-item-section>
              </q-item>
              </q-list>
            </div>
          </q-td>
        </q-tr>
      </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Obra',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'company', align: 'center', classes: 'text-center', label: 'Empresa', field: row => row.company,
    format: val => `${val}`, sortable: true },
  { name: 'head', label: 'Responsável', classes: 'text-center',  align: 'center', field: row => row.head_name,
    format: val => `${val}`, sortable: true },
  { name: 'value', align: 'center', classes: 'text-center',  field: row => row.value,
    format: val => `${val}`, label: 'Valor'},
    { name: 'start', align: 'center', classes: 'text-center',   field: row => new Date(row.start).toLocaleDateString(),
  format: val => `${val}`, label: 'Inicio'},
    { name: 'end',  align: 'center', classes: 'text-center',  field: row => new Date(row.end).toLocaleDateString(),
  format: val => `${val}`, label: 'Fim'},
]
export default {
  data () {
    return {
      columns,
      rows: [],
      form: {
        color1: '#9C27B0',
        color2: '#21BA45',
        color3: '#F2C037',
      },
      start: null,
      end: null,
    }
  },
  mounted () {
    this.getProject()
  },
  methods: {
    getProject () {
      const url = 'project'
      const params = {
      Authorization: 'Bearer ' + localStorage.token
    }
      api({
        method:"get",
        url: url,
        headers: params,
      })
        .then(response => {
          console.log(response.data)
        this.rows = response.data.filter((element) => {
          return element.status === 'in_progress' ? element : null
        })
        this.$forceUpdate()
      })
      .catch(error => {
        console.log(error.response)
      })
    },
  },
}
</script>

<style>

</style>
