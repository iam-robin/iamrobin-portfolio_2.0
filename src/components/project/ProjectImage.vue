<template>
  <div>
    <v-lazy-image :src="require(`@/assets/projects/${src}`)" :alt="alt" class="project-image"/>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  name: 'ProjectImage',
  components: {
    VLazyImage
  },
  props: {
    src: String,
    alt: String
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/lazyload.scss';
.project-image {
  width: 100%;
  margin-bottom: -5px;
  padding-bottom: 40px;
}
</style>
