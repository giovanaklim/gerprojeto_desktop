<template>
  <div>
    <div class="row q-my-md full-width justify-center text-bold text-h4 text-primary">
      <div class="col-6">
        <div class="q-ml-xl">
          {{ project.name }}
        </div>
      </div>
      <div class="col-6">
        <div class="row full-width justify-end">
          <q-icon class="cursor-pointer q-mr-xl" color="negative" name="close" @click="this.$emit('close')"/>
        </div>
      </div>
    </div>
    <q-separator class="q-mb-lg"/>
    <div class="row full-width justify-center items-center">
      <div class="col">
        <div class="row q-mb-xl justify-center">
          <q-card
            bordered
            class="q-pa-sm q-mb-lg"
            flat
            style="border-color: black;
              border-radius: 10px"
          >
            <div class="text-h6 text-bold">Informações do projeto</div>
          </q-card>
          <div class="row full-width q-mb-md justify-center">
            <q-input
              v-model="project.company"
              :readonly="true"
              class="q-mr-lg"
              label="Empresa"
              outlined
              type="text"
            />
            <q-input v-model="project.head_name" :readonly="true" label="Responsável" outlined type="text"/>
          </div>
          <div class="row full-width q-mb-md justify-center">
            <q-input
              v-model="project.value"
              :readonly="true"
              class="q-mr-lg"
              fill-mask="00.00"
              label="Valor"
              mask="##.##"
              outlined
              prefix="R$ "
              reverse-fill-mask
              type="text"
            />
          </div>
          <div class="row justify-center">
            <q-input
              v-model="project.start"
              :readonly="true"
              class="q-mr-lg"
              label="Inicio"
              mask="##/##/####"
              outlined
              type="text"
            />
            <q-input
              v-model="project.end"
              :readonly="true"
              label="Fim"
              mask="##/##/####"
              outlined
              type="text"
            />
          </div>
        </div>
      </div>
      <q-separator vertical/>
      <div class="col">
        <div class="row full-width justify-center">
          <div class=" row full-width justify-center text-h6 text-bold">
            <q-card
              bordered
              class="q-pa-sm q-mb-lg"
              flat
              style="border-color: black;
              border-radius: 10px"
            >
              Etapas do projeto
            </q-card>
          </div>
          <q-list
            v-if="project.stages"
            horizontal
          >
            <div class="row full-width justify-center">
              <q-item v-for="(stage, index) in project.stages" :key="index">
                <q-card
                  :style="'border-color:' + stage.color"
                  bordered
                  class=" q-pb-md"
                  flat
                  style="border-radius: 20px"
                >
                  <div :style="'background-color:' + stage.color"
                       class="row full-width justify-center text-bold q-pa-sm q-mb-sm">
                    {{ stage.name }}
                  </div>

                  <div class="row full-width justify-between q-px-md q-pb-sm">
                    <span class="row full-width  dosis-300 text-gray">Prazos</span>
                    <div>
                      {{ getStageDates(stage.start) }}
                      -
                      {{ getStageDates(stage.end) }}
                    </div>
                  </div>

                  <div class="row full-width q-px-md">
                    <span class="row full-width dosis-300 text-gray">Descrição</span>
                    {{ stage.detail }}
                  </div>
                </q-card>
              </q-item>
            </div>
          </q-list>
        </div>
      </div>
    </div>
    <div class="row full-width q-mt-lg justify-end">
      <q-btn
        v-if="project.status !== 'complete'"
        class="q-mr-xl q-px-lg"
        color="primary"
        style="border-radius: 10px"
        @click="updateProject"
      >
        Finalizar
      </q-btn>
    </div>
  </div>
</template>

<script>
import {api} from "boot/axios";

export default {
  data() {
    return {
      project: {}
    }
  },
  props: {
    project: Object
  },
  mounted() {
    this.project = this.$props.project
  },
  methods: {
    getStageDates(val) {
      return new Date(val).toLocaleDateString();
    },
    updateProject() {
      this.project.status = 'complete'
      const url = '/update-project'
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
      api({
        method: "post",
        data: this.project,
        url: url,
        headers: params,
      })
        .then(response => {
          console.log(response.data)
          this.$forceUpdate()
          this.$emit('reload')
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
