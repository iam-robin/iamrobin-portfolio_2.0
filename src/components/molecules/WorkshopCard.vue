<template>
  <div class="workshop-card">
    <div class="content">
      <div class="image-container" :style="{backgroundColor: color}">
        <img :src="require(`@/assets/workshop/${src}`)" :alt="alt" :style="{width: width}">  
      </div>
      <div class="text-box">
        <div>
          <h2>{{ title }}</h2>
          <tags :tags="tags"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '@/components/atoms/Tags.vue'

export default {
  name: 'workshopCard',
  props: {
    title: String,
    color: String,
    tags: Array,
    src: String,
    width: String,
    alt: String
  },
  components: {
    Tags
  }
}
</script>

<style scoped lang="scss">
.workshop-card {
  width: calc(100% / #{$columns});
  float: left;
  position: relative;
  padding-bottom: calc(100% / #{$columns});
  cursor: pointer;
  backface-visibility: hidden;

  .content {
    width: calc(100% - #{$gutterSize});
    height: calc(100% - #{$gutterSize});
    position: absolute;
    box-shadow: 0 30px 30px 0 rgba(224, 228, 237, .4);
    box-shadow: $card-box-shadow-dark;
    border-radius: 4px;
    transition: all .3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .image-container {
      display: flex;
      flex-grow: 3;
      border-radius: 4px 4px 0 0;
      align-items: center;
      justify-content: center;
    }

    .text-box {
      height: 25%;
      display: flex;
      align-items: center;
      padding: 0 24px;

      box-sizing: border-box;
      width: 100%;
      left: 0;
      bottom: 0;
      border-radius: 0 0px 4px 4px;
      color: $black;
      background-color: $white;

      h2 {
        font-size: 18px;
        margin: 0;
      }

      .tags {
        margin-top: 4px;
      }
    }

    &:hover {
      box-shadow: 0 30px 40px 0 rgba(224, 228, 237, .8);
      transform: translateY(-4px);
      box-shadow: $card-box-shadow-dark-hover;
    }
  }
}

</style>
