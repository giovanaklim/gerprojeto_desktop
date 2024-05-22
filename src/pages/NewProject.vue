<template>
  <div class="NewProject q-pa-md q-ml-md dosis-500">
    <div class="row q-mx-md q-mb-md q-mt-sm text-h4 dosis-600 text-primary">
      Novo Projeto
    </div>
    <q-stepper
      ref="stepper"
      v-model="step"
      animated
      color="primary"
      header-nav
    >
      <q-step
        :done="done1"
        :name="1"
        icon="settings"
        title="Criar Nova Obra"
      >
        <div class="row">
          <div class="col q-mr-md">
            <div class="row q-mb-lg">
              <q-input v-model="project.name" label="Obra" style="width: 100%" type="text"/>
            </div>
            <div class="row q-mb-lg">
              <q-input v-model="project.company" label="Empresa" style="width: 100%" type="text"/>
            </div>
            <div class="row q-mb-lg">
              <q-select
                v-model="project.head"
                :options="options"
                emit-value
                label="Responsavel"
                map-options
                option-label="name"
                option-value="id"
                style="width:100%"
              />
            </div>
            <div class="row q-mb-xl">
              <q-input
                v-model="project.value"
                fill-mask="00.00"
                label="Valor"
                mask="##.##"
                prefix="R$ "
                reverse-fill-mask
                style="width: 100%"
                type="text"
              />
            </div>
            <q-stepper-navigation>
              <q-btn :loading="loading" class="q-mx-sm text-primary" label="Salvar"
                     style="background-color:#CFF2F2" @click="submitProject()"/>
              <q-btn :loading="loading" class="q-mx-sm" color="primary" label="Prosseguir" @click="step = 2"/>
            </q-stepper-navigation>
          </div>
          <div class="col q-mx-sm">
            <q-date v-model="project.dates" mask="DD/MM/YYYY" range title="Período do Projeto">
              <div class="row items-center justify-end">
              </div>
            </q-date>
          </div>
          <div class="col q-ml-md">
            <div class="row justify-center">
              <img
                class="flip-horizontal q-mt-lg"
                src="~/assets/img/crane.svg"
                style="height: 300px;"
              />
            </div>
          </div>
        </div>

      </q-step>

      <q-step
        :done="done2"
        :name="2"
        icon="create_new_folder"
        title="Etapas"
      >
        <Stage :projectId="this.id" :stagesList="stages" @newstage="newStage" @step1="step= 1"
               @step3="() => { done2 = true; step = 3 }"></Stage>

      </q-step>

      <q-step
        :done="done3"
        :name="3"
        icon="add_comment"
        title="Revisão e Envio"
      >
        <Review :project="this.project" :stagesList="stages"></Review>
        <q-stepper-navigation>
          <q-btn color="primary" label="Criar Projeto" @click="submitProjectInProgress()"/>
          <q-btn class="q-ml-sm" color="primary" flat label="Voltar" @click="step = 2"/>
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import {api} from 'src/boot/axios'
import Stage from 'src/components/Stage.vue';
import Review from 'src/components/Review.vue';

export default {
  name: "NewProject",
  data() {
    return {
      options: '',
      onClick: false,
      id: null,
      project: {
        status: null
      },
      stage: [],
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      loading: false,
      stages: []
    };
  },
  mounted() {
    this.getHeader()
  },
  methods: {

    getHeader() {
      const url = 'team'
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
      api({
        method: "get",
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

    submitProject() {
      const url = 'project'
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
      this.project.status = 'draft'
      api({
        method: "post",
        url: url,
        headers: params,
        data: this.project
      })
        .then(response => {
          this.step = 2
          this.loading = false
          this.project = response.data.data
          this.project.dates = {
            from: response.data.data.start,
            to: response.data.data.end
          };
          this.done1 = true
          this.id = response.data.data.id
        })
        .catch(error => {
          this.loading = false
        })
    },

    submitProjectInProgress() {
      const url = 'project/' + this.project.id
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
      this.project.status = "in_progress"
      api({
        method: "put",
        url: url,
        headers: params,
        data: this.project
      })
        .then(response => {
          this.done1 = true
          this.done2 = true
          this.done3 = true
          this.loading = false
          this.project = response.data.data
          this.project.dates = {
            from: response.data.data.start,
            to: response.data.data.end
          };
          this.id = response.data.data.id
          this.$router.push('/')
          this.window.location.reload()
        })
        .catch(error => {
          this.loading = false
        })
    },

    newStage(val) {
      const url = 'stage'
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
      val.project_id = this.project.id
      api({
        method: "post",
        url: url,
        headers: params,
        data: val
      })
        .then(response => {
          this.loading = false
          this.stages = response.data.data
          this.done2 = true
          this.$forceUpdate();
        })
        .catch(error => {
          this.loading = false;
          console.log(error.response)
        })
    }
  },
  components: {Stage, Review}
}
</script>

<style scoped>
</style>
