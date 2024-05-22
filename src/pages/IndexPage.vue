<template>
  <q-page class="q-ml-lg">
    <div class="q-my-lg row full-width dosis-600 justify-start text-h4 text-primary poppins-regular">
      Projetos em aberto
    </div>
    <q-separator/>
    <div class="q-mt-md q-ml-xl-lg row full-width">
      <div v-for="(project, index) in projects" v-if="projects" :key="index">
        <CardProject :project="project" class="q-mx-sm"/>
      </div>
      <div v-if="!projects[0]">
        Você ainda não possui projetos em aberto!
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import {api} from "boot/axios";
import CardProject from "components/CardProject.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {CardProject},
  data() {
    return {
      projects: [],
    }
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    getProjects() {
      const url = 'project'
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
      api({
        method: "get",
        url: url,
        headers: params,
      })
        .then(response => {
          this.projects = response.data.filter((element) => {
            return element.status === 'in_progress' ? element : null
          })
          this.$forceUpdate()
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }
})
</script>
