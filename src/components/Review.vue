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
							<q-input v-model="project.head" type="text" :readonly="true" label="Responsável" style="width: 100%" />
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
									v-model="project.start"
									type="text"
									label="Inicio"
									mask="##/##/####"
									style="width: 100%"
								/>
							</div>
							<div class="col">
								<q-input
									:readonly="true"
									v-model="project.end"
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
						:rows="rows"
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
  { name: 'head', align: 'center', label: 'Responsavel', field: row => row.head,
    format: val => `${val}`, sortable: true },
  { name: 'start', label: 'Inicio',  field: row => row.start,
    format: val => `${val}`, sortable: true },
  { name: 'end', field: row => row.end,
    format: val => `${val}`, label: 'Fim'},
]

const rows = [
  {
    name: 'Frozen Yogurt',
    head: 159,
    start: 6.0,
    end: 24,
  },
  {
    name: 'Ice cream sandwich',
    head: 237,
    start: 9.0,
    end: 37,
  },
  {
    name: 'Eclair',
    head: 262,
    start: 16.0,
    end: 23,
  },
  {
    name: 'Cupcake',
    head: 305,
    start: 3.7,
    end: 67,
  },
  {
    name: 'Gingerbread',
    head: 356,
    start: 16.0,
    end: 49,
  },
]
export default {
	
	data () {
		return {
			columns,
			rows,
			project: {
					start:"21122004",
					end:"24102016",
					name: "Gi",
					company:"ShineShine",
					head:"Brihante",
					status: "draft",
			},
		}
	}
}
</script>

<style>

</style>