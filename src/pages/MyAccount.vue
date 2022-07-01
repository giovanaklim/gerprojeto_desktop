<template>
  <div class="MyAccount dosis-500">
    <div class="row q-mx-md q-my-sm text-h4 dosis-600 text-primary">
      Minha Conta
    </div>
    <div class="row">
      <div class="col-6">
        <q-card class="q-ma-sm">
          <div class="row q-mx-md q-pt-md items-center text-h5 text-primary" style="width:100%">
             Meus dados
          </div>
          <div class="row q-ma-md" >
           <q-input v-model="project.name" :readonly="bola" type="text" label="Nome de usuario" style="width: 100%"/>
         </div>
         <div class="row q-ma-md">
           <q-input v-model="project.email" :readonly="bola" type="text" label="Email" style="width: 100%" />
         </div>
         <div class="row q-ma-md">
           <q-input v-model="project.datanasc" :readonly="bola" type="text" label="Data de Nascimento" mask="##/##/####" style="width: 100%" />
         </div>
         <div class="row q-ma-md">
           <q-input v-model="project.status" :readonly="bola" type="text" label="Estado Civil"  style="width: 100%" />
         </div>
         <div class="row">
           <q-btn color="primary"  class="q-ma-md" v-if="bola === true" icon="edit" label="Editar dados" @click="bola = !bola" />
           <q-btn color="primary" class="q-ma-md" v-if="bola === false" icon="edit" label="Concluir" @click="bola = true" />
         </div>
        </q-card>
      </div>
      <div class="col">
        <q-card class="q-ma-sm" style="height:200px">
         <div class="row q-mx-md q-pt-md items-center text-h5 text-primary" style="width:100%">
             Pagamento
          </div>
         <div class="row q-ma-md q-pt-sm" style="font-size:medium">
          Sua proxima cobrança sera no dia &nbsp; <b> 04/04/2023 </b> &nbsp; , no valor de &nbsp; <b> R$100,00 </b>.
         </div>
         <div class="row items-center q-mt-md q-mx-sm" style="font-size:medium">
          <q-icon name="fa-brands fa-cc-mastercard" class="q-mx-sm"  color="warning" />
           Cartao Mastercard
         </div>
         <div class="row q-mt-xs q-mx-md" style="font-size:smaller">
          Vencimento dia 23/11/2022
         </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      project:{
        status: "Solteiro",
        name: "Giovana",
        email: "gi@gi",
        datanasc: "21122004",

      },
      bola:true,
    }
  },
  methods: {
    Edit () {
      console.log("editando")
    }
  }
}
</script>

<style>

</style>
