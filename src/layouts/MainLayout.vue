<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-icon color="white" size="md" name="engineering" />

        <q-toolbar-title class="dosis-600">
          Gerenciador de Projetos
        </q-toolbar-title>

        <q-btn-dropdown
          auto-close
          stretch
          flat
          :label="store.$state.user.name"
          no-caps
          style="width: 175px"
        >
          <q-list>
            <q-item clickable @click="logout">
              <q-item-section>
                <q-icon name="exit_to_app" color="primary" size="sm" />
              </q-item-section>
              <q-item-section>Log-out</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      elevated
      :width="250"
      :breakpoint="300"
    >
      <Menu class="q-mt-500" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { api } from 'src/boot/axios';
import { mainStore } from 'stores/main'
import Menu from 'src/components/Menu.vue';

export default {
    data() {
        return {
            leftDrawerOpen: true,
            store: mainStore()
        };
    },
    mounted () {
      this.isLogged()
    },
    methods: {
      toggleLeftDrawer() {
          this.leftDrawerOpen = !this.leftDrawerOpen;
      },
      isLogged () {
        if (this.store.$state.isLogged) {
          return
        }

        if (!localStorage.isLogged) {
          this.$router.push('/login')
          return
        }

        api({
          method: 'get',
          url: 'isLogged'
        })
          .then(response => {
            this.store.$state.user = response.data
            this.store.$state.isLogged = true
          })
          .catch(error => {
            this.$router.push('/login')
          })
      },
      logout () {
        api({
          method: 'get',
          url: 'logout'
        })
          .then(response => {
            this.$router.push('/login')
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    components: { Menu }
}
</script>
