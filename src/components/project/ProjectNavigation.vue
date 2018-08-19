<template>
  <div class="project-navigation">
    <router-link :to="prev">
      <div class="prev">vorheriges</div>
    </router-link>
    <router-link to="/projects">Alle Projekte</router-link>
    <router-link :to="next">
      <div class="next">nächstes</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectNavigation',
  props: {
    prev: String,
    next: String
  }
}
</script>

<style scoped lang="scss">

.project-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: $white;
  margin-top: 40px;
  height: 80px;

  a {
    flex-grow: 1;
    text-align: center;
    color: $black;
    text-decoration: none;
  }

  .prev, .next {
    height: 80px;
    line-height: 80px;
    .color {
      background-color: aqua;
    }
  }
}

</style>
