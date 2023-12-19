<template>
  <div class="row full-width poppins-regular items-center" style="height: 100vh">
    <div class="row full-width justify-center">
      <div class="row q-mb-lg full-width justify-center">
          <span class="text-h3">GERENCIADOR DE PROJETOS</span>
      </div>
      <q-card class="q-mt-xl" style="width: 400px">
        <q-card-section class="bg-primary row items-center">
          <q-icon color="white" size="lg" name="engineering" />
          <span class="text-h5 text-white dosis-500 q-ml-lg">Cadastro</span>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <q-input
              v-model="form.name"
              type="text"
              label="Nome"
              style="width: 100%"
            />
          </div>
          <div class="row" >
            <q-input
              v-model="form.email"
              type="text"
              label="E-mail"
              style="width: 100%"
            />
          </div>
          <div class="row">
            <q-input
              v-model="form.password"
              type="password"
              label="Senha"
              style="width: 100%"
            />
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="q-px-md bg-primary text-white dosis-500"
            label="Registrar"
            :loading="loading"
            style="width: 40%"
            @click="submit"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import {mainStore} from "stores/main";
import {api} from "boot/axios";

export default {
  name: 'Register',
  data() {
    return {
      form: {},
      error: {
        email: false,
        password: false,
        name: false,
      },
      loading: false,
      store: mainStore()
    }
  },

  methods: {
    submit() {
      this.loading = true
      const url = 'register'

      api({
        method: 'post',
        url: url,
        data: this.form
      })
        .then(response => {
          console.log('foi')
          this.loading = false
          this.store.$state.user = response.data
          this.store.$state.isLogged = true
          localStorage.token = response.data.token
          localStorage.isLogged = true
          this.$router.push('/')

        })
        .catch(error => {
          console.log('não foi')
          this.loading = false
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
