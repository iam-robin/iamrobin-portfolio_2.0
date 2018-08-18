<template>
  <img :src="require(`@/assets/projects/${src}`)" :alt="alt" class="project-image">
</template>

<script>
export default {
  name: 'ProjectImage',
  props: {
    src: String,
    alt: String
  }
}
</script>

<style scoped lang="scss">
.project-image {
  width: 100%;
  margin-bottom: -5px;
  padding-bottom: 40px;
}
</style>
