<template>
  <div class="row full-width poppins-regular items-center" style="height: 100vh">
    <div class="row full-width justify-center">
      <div class="row q-mb-lg full-width justify-center">
        <span class="text-h3">GERENCIADOR DE PROJETOS</span>
      </div>
      <q-card class="q-mt-xl" style="width: 400px">
        <q-card-section class="bg-primary row items-center">
          <q-icon color="white" size="lg" name="engineering" />
          <span class="text-h5 text-white dosis-500 q-ml-lg">Login</span>
        </q-card-section>
        <q-card-section>
          <div class="row" >
            <q-input
              v-model="form.email"
              type="text"
              label="E-mail"
              style="width: 100%"
              :error="error.email"
              :error-message="error.emailMessage"
              @focus="error.email = false"
            />
          </div>
          <div class="row">
            <q-input
              v-model="form.password"
              type="password"
              label="Senha"
              :error="error.password"
              :error-message="error.passwordMessage"
              @focus="error.password = false"
              style="width: 100%"
            />
          </div>
          <div class="row q-mt-md">
            <div v-if="error.auth" class="text-negative" style="font-size: 12px">{{ error.authMessage }}</div>
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="q-px-md bg-primary text-white dosis-500"
            label="login"
            :loading="loading"
            style="width: 40%"
            @click="loginUser"/>
        </q-card-actions>
      </q-card>
      <div class="row q-mt-md q-ml-sm full-width justify-center">
        <span>Não possui login? <u class="cursor-pointer" @click="callRegister"> Cadastre-se </u></span>
      </div>
    </div>
  </div>
</template>

<script>
import { api, sanctum } from 'src/boot/axios'
import { mainStore } from 'stores/main'
import routes from "src/router/routes";
export default {
  name: 'Login',
  data () {
    return {
      form: {},
      error: {
        email: false,
        password: false,
        auth: false
      },
      loading: false,
      store: mainStore()
    }
  },
  mounted () {
    // this.getCookie()
  },
  methods: {
    callRegister(){
      console.log('ola')
      this.$router.push('/register')
    },
    // getCookie () {
    //   sanctum({
    //     method: 'get',
    //     url: 'sanctum/csrf-cookie',
    //     headers:{
    //       'Accept':'application/json'
    //     }
    //     }).then(response => {

    //     }
    //   )
    // },
    loginUser () {
      this.loading = true
      const url = 'login'

      api({
        method: 'post',
        url: url,
        data: this.form
      })
      .then(response => {
        this.loading = false
        this.store.$state.user = response.data
        this.store.$state.isLogged = true
        localStorage.token = response.data.token
        localStorage.isLogged = true
        this.$router.push('/')

      })
      .catch(error => {
        this.loading = false
        console.log(error)
        if (error.response.data.errors.email) {
          this.error.email = true;
          this.error.emailMessage = error.response.data.errors.email[0]
          return
        }

        if (error.response.data.errors.password) {
          this.error.password = true;
          this.error.passwordMessage = error.response.data.errors.password[0]
          return
        }

        if (error.response.data.errors.auth) {
          this.error.auth = true;
          this.error.authMessage = error.response.data.errors.auth[0]
          return
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
