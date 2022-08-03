<template>
  <div class="Stage dosis-500">
    <div class="row">
      <div class="col-4 q-mr-md" >
        <q-input
          v-model="form.name"
          label="Nome da Etapa"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório!']"
        />
       <q-select
        v-model="form.head"
        map-options
        emit-value
        :options="options"
        option-label="name"
        option-value="id"
        label="Responsavel"

      />
      <div class="row q-my-sm">
        <q-input
          v-model="form.value"
          type="text"
          label="Valor"
          prefix="R$ "
          mask="##.##"
          fill-mask="00.00"
          reverse-fill-mask
          style="width: 100%"
        />
        </div>
      <q-input v-model="form.detail" label="Detalhes"  stack-label ></q-input>
      <div class="q-pa-sm">
        <q-badge :style="'background-color: '+ form.color" class="text-black">
          {{ form.color }}
        </q-badge>
        <q-color
          v-model="form.color"
          no-header
          no-footer
          default-view="palette"
          class="my-picker q-mt-sm"
          style="width:100px; height:50px"
        />
      </div>
      </div>
      <div class="col-3 q-mx-md">
         <q-date v-model="form.dates" mask="DD/MM/YYYY" title="Período da Etapa" range />
      </div>
      <div class="col-4  q-mx-md ">
        <q-table
         flat
          title="Etapas"
          :rows="stagesList"
          :columns="columns"
          row-key="name"
        />
      </div>
    </div>
     <div class="row q-my-md" style="width:100%">
      <q-btn @click="this.$emit('newstage', form) + this.reset()" class="q-mx-sm text-primary" :loading="loading" style="background-color:#CFF2F2" label="Salvar" />
      <q-btn @click="this.$emit('step3')" color="primary" label="Prosseguir" />
      <q-space />
      <q-btn flat @click="this.$emit('step1')" color="primary" label="Voltar" class="q-ml-sm" />
    </div>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'

const columns = [
  {
    name: 'stage',
    required: true,
    label: 'Etapa',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'head', align: 'center', label: 'Responsavel', field: row => row.head_user.name,
    format: val => `${val}`, sortable: true },
  { name: 'start', label: 'Inicio',  field: row => row.start,
    format: val => `${val}`, sortable: true },
  { name: 'end', field: row => row.end,
    format: val => `${val}`, label: 'Fim'},
]


export default {
  props:{
    projectId: String,
    stagesList: Array
  },
	data () {
		return {
      options:'',
      rows: this.stagesList,
      columns,
      project: {
        status: "draft",
      },
      form:{
        value:null,
        dates: null,
        name: '',
        project_id: null,
        head: '',
        detail: '',
        color: null,
      },
		}
	},
  mounted () {
    this.getHeader()
    this.loadStages()
  },
  methods: {
    getHeader () {
      const url = 'team'
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
      api({
        method:"get",
        url: url,
        headers: params,
      })
        .then(response => {
        this.options = response.data;
        this.$forceUpdate();
      })
      .catch(error => {
        console.log(error.response);
      })
    },

    loadStages () {
       const url = 'stage/' + this.projectId
       const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
       api({
        method: "get",
        url: url,
        headers: params,
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

    reset () {
      this.form.name = ''
      this.form.head = ''
      this.form.detail = ''
      this.form.color = null
      this.form.value = null
      this.form.dates = null
    }

  }
}
</script>

<style>

</style>
