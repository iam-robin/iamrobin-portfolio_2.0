<template>
  <div class="project-bgimage" :style="{backgroundColor: color, height: heightContainer}">
    <img :src="require(`@/assets/projects/${src}`)" :alt="alt" class="project-image" :style="{height: heightImg}">
  </div>
</template>

<script>
export default {
  name: 'ProjectBackgroundImage',
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
