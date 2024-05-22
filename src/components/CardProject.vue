<template>
  <div class="dosis-400">
    <q-card
      class="q-pt-md cursor-pointer bg-primary"
      dark
      style="border-radius: 10px; width:200px"
      @click="details = true"
    >
      <div class="row q-mb-sm full-width justify-center text-h6 text-bold">
        {{ project.name }}
      </div>
      <q-separator color="white"/>
      <q-card-section>
        <div
          :class="status === 'ATRASADO'? 'text-negative' : status === 'PARA HOJE' ? 'text-warning' : 'text-positive'"
          class="row full-width justify-center text-bold bg-white q-pa-xs"
          style="border-radius: 20px"
        >
          {{ this.status }}
        </div>
      </q-card-section>
    </q-card>
    <q-dialog v-model="details" class="q-pa-lg dosis-500 bg-white" maximized>
      <q-card class="q-pa-sm">
        <ProjectDetails :project="project" @close="details = false" @reload="reloadPage"/>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import ProjectDetails from "components/ProjectDetails.vue";

export default {
  name: 'CardProject',
  components: {ProjectDetails},
  data() {
    return {
      color: '',
      details: false,
      today: '',
      endDate: '',
      startDate: '',
      status: '',
    }
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.getStatusProject(this.$props.project)
  },
  methods: {
    getStatusProject(val) {
      this.endDate = new Date(val.end).toLocaleDateString();
      this.startDate = new Date(val.start).toLocaleDateString();
      this.today = new Date().toLocaleDateString();

      if (this.endDate < this.today) {
        this.status = 'ATRASADO'
      } else if (this.endDate === this.today) {
        this.status = 'PARA HOJE'
      } else {
        this.status = 'EM DIA'
      }
    },
    reloadPage() {
      this.details = false
      this.$forceUpdate()
      this.window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.q-card:hover {
  box-shadow: 8px 8px 10px #a5e2ec;
}
</style>
