<template>
  <div class="NewProject q-pa-md q-ml-md dosis-500">
    <div class="row q-mx-md q-mb-md q-mt-sm text-h4 dosis-600 text-primary">
      Novo Projeto
    </div>
    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Criar Nova Obra"
        icon="settings"
        :done="done1"
      >
      <div class="row">
        <div class="col q-mr-md">
          <div class="row q-mb-lg">
            <q-input v-model="project.name" type="text" label="Obra" style="width: 100%"/>
          </div>
          <div class="row q-mb-lg">
            <q-input v-model="project.company" type="text" label="Empresa" style="width: 100%" />
          </div>
          <div class="row q-mb-lg">
           <q-select
           style="width:100%"
            v-model="project.head"
            map-options
            emit-value
            :options="options"
            option-label="name"
            option-value="id"
            label="Responsavel"
          />
          </div>
          <div class="row q-mb-xl">
            <q-input
              v-model="project.value"
              type="text"
              label="Valor"
              prefix="R$ "
              mask="##.##"
              fill-mask="00.00"
              reverse-fill-mask
              style="width: 100%"
            />
          </div>
          <q-stepper-navigation>
            <q-btn @click="submitProject()" class="q-mx-sm text-primary" :loading="loading" style="background-color:#CFF2F2" label="Salvar" />
            <q-btn @click="step = 2" class="q-mx-sm" :loading="loading" color="primary" label="Prosseguir" />
          </q-stepper-navigation>
        </div>
        <div class="col q-mx-sm">
          <q-date v-model="project.dates" mask="DD/MM/YYYY" title="Período do Projeto" range>
            <div class="row items-center justify-end">
            </div>
          </q-date>
        </div>
        <div class="col q-ml-md">
          <div class="row justify-center">
            <img
              src="~/assets/img/crane.svg"
              class="flip-horizontal q-mt-lg"
              style="height: 300px;"
            />
          </div>
        </div>
      </div>

      </q-step>

      <q-step
        :name="2"
        title="Etapas"
        icon="create_new_folder"
        :done="done2"
      >
        <Stage  @newstage="newStage" @step1="step= 1"  @step3="() => { done2 = true; step = 3 }" :projectId="this.id"  :stagesList="stages"> </Stage>

      </q-step>

      <q-step
        :name="3"
        title="Revisão e Envio"
        icon="add_comment"
        :done="done3"
      >
       <Review :project="this.project" :stagesList="stages"></Review>
        <q-stepper-navigation>
          <q-btn color="primary" @click="submitProjectInProgress()" label="Criar Projeto" />
          <q-btn flat @click="step = 2" color="primary" label="Voltar" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'
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
          loading: false,
          stages: []
        };
    },
    mounted () {
      this.getHeader()
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
        this.step = 1
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

      newStage (val) {
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
    watch:{

    },
    components: { Stage, Review }
}
</script>

<style scoped>
</style>
