<template>
  <div class="project-navigation">
    <router-link :to="prev">
      vorheriges Projekt
    </router-link>
    <router-link to="/projects">Alle Projekte</router-link>
    <router-link :to="next">
      nächstes Projekt
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
  margin-top: 40px;

  a {
    flex-grow: 1;
    text-align: center;
    color: $black;
    text-decoration: none;
    line-height: 80px;
    background-color: $white;

    &:first-child {
        border-radius: 4px 0 0 4px;
    }

    &:nth-child(2) {
      
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
}

</style>
