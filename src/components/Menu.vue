<template>
  <div class="Menu full-height column justify-between no-wrap">
    <q-list class="dosis-500">
      <q-item v-ripple class="q-mt-md" clickable to="/">
        <q-item-section avatar>
          <q-icon color="primary" name="home" size="sm"/>
        </q-item-section>
        <q-item-section>Home</q-item-section>
      </q-item>
      <q-item v-ripple clickable to="nova-obra">
        <q-item-section avatar>
          <q-icon color="primary" name="architecture" size="sm"/>
        </q-item-section>
        <q-item-section>Novo Projeto</q-item-section>
      </q-item>
      <!--      <q-item clickable v-ripple to="projetos-em-andamento">-->
      <!--        <q-item-section avatar>-->
      <!--          <q-icon color="primary" size="sm" name="foundation"  />-->
      <!--        </q-item-section>-->
      <!--        <q-item-section>Projetos em Andamento</q-item-section>-->
      <!--      </q-item>-->
      <q-item v-ripple clickable to="projetos-concluidos">
        <q-item-section avatar>
          <q-icon color="primary" name="home_work" size="sm"/>
        </q-item-section>
        <q-item-section>Projetos Concluídos</q-item-section>
      </q-item>
      <q-item v-ripple clickable to="equipe">
        <q-item-section avatar>
          <q-icon color="primary" name="group" size="sm"/>
        </q-item-section>
        <q-item-section>Equipe</q-item-section>
      </q-item>
    </q-list>

    <q-item class="col-grow"/>
    <q-separator/>
    <q-item v-ripple class="dosis-500 q-py-md" clickable style="background-color: #ebebeb" to="minha-conta">
      <q-item-section avatar>
        <q-icon color="primary" name="settings" size="sm"/>
      </q-item-section>
      <q-item-section>Minha Conta</q-item-section>
    </q-item>

  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {}
  }
}
</script>
