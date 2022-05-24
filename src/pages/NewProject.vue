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
        <div class="row q-mb-lg">
          <q-input v-model="form.name" type="text" label="Obra" style="width: 100%"/>
        </div>
        <div class="row q-mb-lg">
          <q-input v-model="form.company" type="text" label="Empresa" style="width: 100%" />
        </div>
        <div class="row q-mb-lg">
          <q-input v-model="form.head" type="text" label="Responsável" style="width: 100%" />
        </div>
        <div class="row justify-between q-mb-lg">
          <q-input v-model="form.start" mask="date" :rules="['date']" label="Previsão de Início" style="width: 45%">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.start">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Selecionar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input v-model="form.start" placeholder="DD/MM/AAAA" type="text" mask="##/##/####" label="Previsão de Início" style="width: 45%" />
          <q-input v-model="form.end" placeholder="DD/MM/AAAA" type="text" mask="##/##/####" label="Previsão de Conclusão" style="width: 45%" />
        </div>

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
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
    <!-- <div class="row">
      <span class="text-h4 poppins-regular">Nova Obra</span>
    </div>
    <div class="container row q-ma-lg">
      <div class="col-4">
        <div class="row q-mb-lg">
          <q-input v-model="form.name" type="text" label="Obra" style="width: 100%"/>
        </div>
        <div class="row q-mb-lg">
          <q-input v-model="form.company" type="text" label="Empresa" style="width: 100%" />
        </div>
        <div class="row q-mb-lg">
          <q-input v-model="form.head" type="text" label="Responsável" style="width: 100%" />
        </div>
        <div class="row justify-between q-mb-lg">
          <q-input v-model="form.start" placeholder="DD/MM/AAAA" type="text" mask="##/##/####" label="Previsão de Início" style="width: 45%" />
          <q-input v-model="form.end" placeholder="DD/MM/AAAA" type="text" mask="##/##/####" label="Previsão de Conclusão" style="width: 45%" />
        </div>
        <div class="row q-mt-xl q-pt-xl">
          <q-btn color="primary" icon="check" label="Criar Nova Obra" @click="onClick" />
        </div>
      </div>
      <div class="col q-ml-xl">
        <q-card flat style="background-color: #f5f5f5">
          <q-card-section>
            <div class="text-h6 grey-color poppins-medium">Etapas</div>
            <div class="text-grey dosis-500" style="font-size: 13px">Cadastre as etapas do Projeto</div>
          </q-card-section>
          <div class="row">
            <div class="col q-mx-md">
              <div class="row">
                <q-input v-model="stageName" type="text" label="Etapa" style="width: 100%" />
              </div>
              <div class="row">
                  <q-input v-model="stageHead" type="text" label="Responsável" style="width: 100%" />
              </div>
              <div class="row">
                <q-input v-model="stageDetail" type="textarea" maxlength="150" rows="3" label="Descrição" style="width: 100%" />
              </div>
              <div class="row justify-between q-mb-lg">
                <q-input v-model="stageStart" placeholder="DD/MM/AAAA" type="text" mask="##/##/####" label="Previsão de Início" style="width: 45%" />
                <q-input v-model="stageEnd" placeholder="DD/MM/AAAA" type="text" mask="##/##/####" label="Previsão de Conclusão" style="width: 45%" />
              </div>
              <div class="row q-mt-lg">
                <q-btn color="grey" icon="map" label="Adicionar Etapa" @click="addStage" />
              </div>
            </div>
            <q-separator inset vertical />
            <div class="col q-mx-md">
              <q-list>
                <template v-for="item,index in stage" :key="index">
                  <q-item>
                    <q-item-section>{{(index + 1) + '. ' + item.name + ' - ' + item.head}}</q-item-section>
                    <q-item-section class="row text-right">
                      <q-icon class="cursor-pointer" size="xs" color="negative" name="delete" @click="removeStage()" />
                    </q-item-section>
                  </q-item>
                  <q-separator />
                </template>
              </q-list>
            </div>
          </div>
          <q-card-section class="dosis-500">
          </q-card-section>
        </q-card>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'NewProject',
  data () {
    return {
      form: {},
      stage: [],
      stageName: null,
      stageHead: null,
      step: 1
    }
  },
  methods: {
    addStage () {
      this.stage.push ({
        name: this.stageName,
        head: this.stageHead
      })

      this.clearStageForm()
    }
  },
  clearStageForm () {
    this.stageName = null
    this.stageHead = null
  }
}
</script>

<style scoped>
</style>
