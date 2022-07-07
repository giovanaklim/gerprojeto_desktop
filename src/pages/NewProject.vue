<template>
  <div class="NewProject q-pa-md q-ml-md">
    <div class="row q-mx-md text-h4 dosis-600 text-primary">
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
        <Stage :project-id="id"  @new-stage="newStage"  ></Stage>
        <q-stepper-navigation >
        <div class="row" style="width:100%">
          <q-btn @click="submitProject()" class="q-mx-sm text-primary" :loading="loading" style="background-color:#CFF2F2" label="Salvar" />
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Prosseguir" />
          <q-space />
          <q-btn flat @click="step = 1" color="primary" label="Voltar" class="q-ml-sm" />
        </div>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Revisão e Envio"
        icon="add_comment"
        :done="done3"
      >
       <Review></Review>
        <q-stepper-navigation>
          <q-btn color="primary" @click="submitProject()" label="Criar Projeto" />
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
            status: "draft",
          },
          stage: [],
          stageName: null,
          stageHead: null,
          step: 1,
          loading: false
        };
    },
    mounted () {
      this.getHeader()
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

        addStage() {
            this.stage.push({
                name: this.stageName,
                head: this.stageHead
            });
            this.clearStageForm();
        },
        clearStageForm() {
            this.stageName = null;
            this.stageHead = null;
        },
        submitProject() {
            this.done3 = true
            api({
                method: "post",
                url: "project",
                data: this.project
            })
                .then(response => {
                this.loading = false

                this.project = response.data.data
                this.project.dates = {
                    from: response.data.data.start,
                    to: response.data.data.end
                };
                this.done1 = true;
                this.id = response.data.data.id
                this.step = 2;
                this.$forceUpdate();
            })
                .catch(error => {
                this.loading = false;
                console.log(error.response);
            })
        },
      // saveStage1 () {
      //   api({
      //     method: "post",
      //     url: "project",
      //     data: this.project
      //   })
      //   .then(response => {
      //     this.loading = false
      //     this.project = response.data.data
      //     this.project.dates = {
      //       from: response.data.data.start,
      //       to: response.data.data.end
      //     };
      //     this.done1 = true;
      //     this.step = 2;
      //     this.$forceUpdate();
      //     console.log(this.project);
      //   })
      //   .catch(error => {
      //     this.loading = false;
      //     console.log(error.response)
      //   })
      // }
    },
    watch:{
      newStage (val) {
        this.project.stage = val
      }
    },
    components: { Stage, Review }
}
</script>

<style scoped>
</style>
