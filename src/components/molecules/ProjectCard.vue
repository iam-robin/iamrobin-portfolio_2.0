<template>
  <div class="project-card">
    <div class="description">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <tags :tags="tags"/>
    </div>
    <div class="number">{{number}}</div>
    <div class="image-container" :style="{backgroundColor: color}">
      <v-lazy-image :src="require(`@/assets/projects/${src}`)" :alt="alt" :style="{width: width}"/>
    </div>
  </div>
</template>

<script>
import Tags from '@/components/atoms/Tags.vue'

export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    color: String,
    tags: Array,
    number: String,
    src: String,
    alt: String,
    width: String
  },
  components: {
    Tags
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/lazyload.scss';
.project-card {
  display: flex;
  position: relative;
  background-color: $white;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 400px;
  padding-left: 80px;
  box-sizing: border-box;
  margin-bottom: 40px;
  color: $black;
  text-decoration: none;
  font-family: $sans;
  backface-visibility: hidden;
  border-radius: 4px;
  box-shadow: $card-box-shadow-dark;
  transition: all .3s ease-in-out;

  &:hover {
    transform: $card-hover;
    box-shadow: $card-box-shadow-dark-hover;

    .number {
      opacity: .5;
    }
  }

  .description {
    width: 40%;

    h1{
      font-size: 24px;
      margin: 0 0 8px;
      transition: color .3s ease-in-out;
    }

    p{
      margin: 0;
      transition: color .3s ease-in-out;
    }
  }

  .number {
    position: absolute;
    color: $grey;
    opacity: .4;
    font-family: $mono;
    font-size: 24px;
    font-weight: $bold;
    top: 40px;
    right: 40%;
    transition: all .3s ease-in-out;
  }

  .image-container {
    width: 40%;
    align-self: stretch;
    background-size: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 4px 4px 0;
    overflow: hidden;

    img {
      width: 32%;
    }
  }
}
</style>
