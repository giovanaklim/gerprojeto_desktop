<template>
  <div class="Stage dosis-500">
    <div class="row">
      <div class="col-4 q-mr-md" >
        <q-input
          v-model="form.name"
          label="Nome da Etapa"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório!']"
          @blur="$emit('new-stage', form)"
        />
       <q-select
        v-model="form.head"
        map-options
        emit-value
        :options="options"
        option-label="name"
        option-value="id"
        label="Responsavel"
        @blur="$emit('new-stage', form)"

      />
      <q-input v-model="form.detail" label="Detalhes" @blur="$emit('new-stage', form)" stack-label ></q-input>
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
         <q-date v-model="project.dates" mask="DD/MM/YYYY" @blur="$emit('new-stage', form)" title="Período do Projeto" range>

            <div class="row items-center justify-end">
            </div>
          </q-date>
      </div>
      <div class="col-4  q-mx-md ">
        <q-table
          title="Etapas"
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
      </div>
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
  { name: 'head', align: 'center', label: 'Responsavel', field: row => row.head,
    format: val => `${val}`, sortable: true },
  { name: 'start', label: 'Inicio',  field: row => row.start,
    format: val => `${val}`, sortable: true },
  { name: 'end', field: row => row.end,
    format: val => `${val}`, label: 'Fim'},
]


export default {
  props:{
    projectId: String
  },
	data () {
		return {
      options:'',
      rows:[],
      columns,
      project: {
        status: "draft",
      },
      form:{
        name: '',
        project_id: null,
        head: '',
        detail: '',
        color: null,
      },
		}
	},
  mounted () {
    console.log(this.projectId)
    this.getHeader()
    this.loadStages()
  },
  methods: {
    getHeader () {
       api({
          method:"get",
          url: "team",
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
       api({
        method: "get",
        url: "project/get-stages/" + this.project,
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

    submitProject() {
      this.loading = true;
      api({
          method: "post",
          url: "project",
          data: this.project
      })
          .then(response => {
          this.loading = false;
          this.project = response.data.data;
          this.project.dates = {
              from: response.data.data.start,
              to: response.data.data.end
          };
          this.done1 = true;
          this.step = 2;
          this.$forceUpdate();
      })
          .catch(error => {
          this.loading = false;
          console.log(error.response);
          // if (error.response.data.errors.email) {
          //   this.error.email = true;
          //   this.error.emailMessage = error.response.data.errors.email[0]
          //   return
          // }
          // if (error.response.data.errors.password) {
          //   this.error.password = true;
          //   this.error.passwordMessage = error.response.data.errors.password[0]
          //   return
          // }
          // if (error.response.data.errors.auth) {
          //   this.error.auth = true;
          //   this.error.authMessage = error.response.data.errors.auth[0]
          //   return
          // }
      })
    }
  },
  watch:{
    project (val){
      this.loadStages()
    }
  }
}
</script>

<style>

</style>
