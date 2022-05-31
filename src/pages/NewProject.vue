<template>
  <div class="NewProject q-pa-md q-ml-md">
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
            <q-input v-model="project.head" type="text" label="Responsável" style="width: 100%" />
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
            <q-btn @click="submitProject" :loading="loading" color="primary" label="Continuar" />
          </q-stepper-navigation>
        </div>
        <div class="col q-mx-sm">
          <q-date v-model="project.dates" mask="DD/MM/YYYY" title="Período do Projeto" range>
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Selecionar" color="primary" flat />
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
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="done2"
      >
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Create an ad"
        icon="add_comment"
        :done="done3"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'

export default {
  name: 'NewProject',
  data () {
    return {
      project: {
        status: 'draft',
      },
      stage: [],
      stageName: null,
      stageHead: null,
      step: 1,
      loading: false
    }
  },
  methods: {
    addStage () {
      this.stage.push ({
        name: this.stageName,
        head: this.stageHead
      })

      this.clearStageForm()
    },
    clearStageForm () {
      this.stageName = null
      this.stageHead = null
    },
    submitProject () {
      this.loading = true
      api({
            method: 'post',
            url: 'project',
            data: this.project
          })
            .then(response => {
              this.loading = false
              this.project = response.data.data
              this.project.dates = {
                from: response.data.data.start,
                to: response.data.data.end
              }
              this.done1 = true
              this.step = 2
              this.$forceUpdate()
              console.log(this.project)
            })
            .catch(error => {
              this.loading = false
              console.log(error.response)

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
  }
}
</script>

<style scoped>
</style>
