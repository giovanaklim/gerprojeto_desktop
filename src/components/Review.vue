<template>
  <div class="Review dosis-500">
    <q-card>
			<q-card-section class="bg-primary">
				<div class="row text-h6 dosis-600 text-white">Revisão</div>
			</q-card-section>
			<q-card-section>
				<div class="row">
					<div class="col-5 q-mx-md">
						<div class="row q-mb-lg">
							<q-input v-model="project.name" :readonly="true" type="text" label="Obra" style="width: 100%"/>
          	</div>
						<div class="row q-mb-lg">
            	<q-input v-model="project.company" :readonly="true" type="text" label="Empresa" style="width: 100%" />
          	</div>
						<div class="row q-mb-lg">
							<q-input v-model="project.head_name" type="text" :readonly="true" label="Responsável" style="width: 100%" />
						</div>
						<div class="row q-mb-xl">
							<q-input
								:readonly="true"
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
						<div class="row q-mb-xl">
							<div class="col q-mr-md">
								<q-input
									:readonly="true"
									v-model="start"
									type="text"
									label="Inicio"
									mask="##/##/####"
									style="width: 100%"
								/>
							</div>
							<div class="col">
								<q-input
									:readonly="true"
									v-model="end"
									type="text"
									label="Fim"
									mask="##/##/####"
									style="width: 100%"
								/>
							</div>
						</div>
          </div>
					<div class="col-6 q-mx-md">
						<q-table
						title="Etapas"
						:rows="stagesList"
						:columns="columns"
						row-key="name"
					/>
					</div>
				</div>
			</q-card-section>
    </q-card>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'
const columns = [
  {
    name: 'stage',
    required: true,
    label: 'Etapa',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'head', align: 'center', label: 'Responsavel', field: row => row.head_user.name,
    format: val => `${val}`, sortable: true },
  { name: 'start', label: 'Inicio',  field: row => new Date(row.start).toLocaleDateString() ,
    format: val => `${val}`, sortable: true },
  { name: 'end', field: row => new Date(row.end).toLocaleDateString(),
    format: val => `${val}`, label: 'Fim'},
]
export default {

  props: {
    projectId: String,
    project: Object,
    stagesList: Array
  },

	data () {
		return {
			columns,
      rows: this.stagesList,
      headUser: null,
      start: null,
      end: null,
		}
	},
  mounted () {
    this.loadStages()
    this.start = new Date (this.project.start).toLocaleDateString()
    this.end = new Date (this.project.end).toLocaleDateString()
  },
   methods: {
    loadStages () {
      const url = 'stage/' + this.projectId
      const params = {
        Authorization: 'Bearer ' + localStorage.token
      }
        api({
        method: "get",
        url: url,
        headers: params,
      })
        .then(response => {
        this.rows = response.data;
        this.$forceUpdate();
      })
        .catch(error => {
        this.loading = false;
        console.log(error.response)
      });
    },
  }

}
</script>

<style>

</style>
