<template>
  <div class="project-navigation">
    <router-link :to="prev">←</router-link>
    <router-link to="/projects">Alle Projekte</router-link>
    <router-link :to="next">→</router-link>
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
    margin-right: 8px;
    padding: 16px 8px;
    text-align: center;
    color: $black;
    text-decoration: none;
  }
}

</style>
