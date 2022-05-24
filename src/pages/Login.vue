<template>
  <div class="Login" style="height: 100vh">
    <div class="login-form row justify-center items-center full-height full-width">
      <div class="row full-width justify-center">
        <span class="text-h3 poppins-regular">GERENCIADOR DE PROJETOS</span>
      </div>
      <div class="row">
        <q-card class="my-card" style="width: 400px">
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
              @click="getCookie"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { api, sanctum } from 'src/boot/axios'
import { mainStore } from 'stores/main'
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
  methods: {
    getCookie () {
      this.loading = true
      sanctum.get('sanctum/csrf-cookie').then(response => {
          this.loginUser()
        }
      )
    },
    loginUser () {
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
            localStorage.isLogged = true
            this.$router.push('/')

          })
          .catch(error => {
            this.loading = false

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
