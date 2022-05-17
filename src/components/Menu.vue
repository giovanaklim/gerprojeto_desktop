<template>
  <div class="Menu full-height column justify-between no-wrap">
    <q-list class="dosis-500">
      <q-item clickable v-ripple class="q-mt-md">
        <q-item-section avatar>
          <q-icon color="primary" size="sm" name="architecture" />
        </q-item-section>
        <q-item-section>Novo Projeto</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" size="sm" name="foundation" />
        </q-item-section>
        <q-item-section>Projetos em Andamento</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" size="sm" name="home_work" />
        </q-item-section>
        <q-item-section>Projetos Concluídos</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" size="sm" name="group" />
        </q-item-section>
        <q-item-section>Equipe</q-item-section>
      </q-item>
    </q-list>

    <q-item class="col-grow" />
    <q-separator />
    <q-item clickable v-ripple class="dosis-500 q-py-md" style="background-color: #ebebeb">
      <q-item-section avatar>
        <q-icon color="primary" size="sm" name="settings" />
      </q-item-section>
      <q-item-section>Minha Conta</q-item-section>
    </q-item>

  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {}
  }
}
</script>
