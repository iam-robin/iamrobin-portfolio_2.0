<template>
  <div class="project-bgimage" :style="{backgroundColor: color, height: heightContainer}">
    <v-lazy-image :src="require(`@/assets/projects/${src}`)" :alt="alt" class="project-image" :style="{height: heightImg}"/>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: 'ProjectBackgroundImage',
  components: {
    VLazyImage
  },
  props: {
    src: String,
    alt: String,
    heightContainer: String,
    heightImg: String,
    color: String
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/lazyload.scss';
.project-bgimage {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    height: 80px;
  }
}
</style>
