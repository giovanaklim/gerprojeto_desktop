<template>
  <div class="Teams dosis-500 ">
    <div class="row q-ma-lg text-h4 dosis-600 text-primary">
      Equipe
    </div>
    <div class="row q-mt-md justify-center" style="width:100%">
      <div class="col-4 q-ml-md">
        <q-card>
          <div class="row q-mx-md q-pt-md items-center text-h5 text-primary" style="width:100%">
          Cadastrar novo membro
        </div>
          <div class="row q-ma-md" >
            <q-input v-model="project.name" type="text" label="Nome" style="width: 100%"/>
          </div>
          <div class="row q-ma-md">
            <q-input v-model="project.role" type="text" label="Função" style="width: 100%" />
          </div>
          <q-btn color="primary" class="q-ma-md" icon="add" label="Adicionar" @click="onClick" />
        </q-card>
      </div>
      <div class="col q-mx-md">
        <q-table
        class="q-px-md"
        :rows="rows"
        :columns="columns"
        style="width:100%"
        row-key="name"
        >
          <template v-slot:top>
          <div class="text-h5 text-primary">
            Equipe existente
          </div>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          </template>
          <template v-slot:roleer="props">
            <q-tr :props="props">
              <q-th auto-width />
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>
        </q-table>
     </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Nome',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'role', label: 'Função',  field: row => row.role,
    format: val => `${val}`, sortable: true },
]

const rows = [
  {
    name: 'Frozen Yogurt',
    role: 159,
  },
  {
    name: 'Ice cream sandwich',
    role: 237,
  },
  {
    name: 'Eclair',
    role: 262,
  },
  {
    name: 'Cupcake',
    role: 305,
  },
  {
    name: 'Gingerbread',
    role: 356,
  },
]
export default {
  data () {
    return {
      project: {
        email:'',
        role: '',
        password: '',
        name: '',
      },
      columns,
      rows,
      form: {
        color1: '#9C27B0',
        color2: '#21BA45',
        color3: '#F2C037',
      }

    }
  }
}
</script>

<style>

</style>
