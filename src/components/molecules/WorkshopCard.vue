<template>
  <div class="workshop-card">
    <div class="content" :style="{backgroundColor: color}">
      <div class="text-box">
        <h2>{{ title }}</h2>
        <tags :tags="tags"/>
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
    tags: Array
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
    padding: 16px;
    position: absolute;
    box-shadow: 0 30px 30px 0 rgba(224, 228, 237, .4);
    box-shadow: $card-box-shadow;
    border-radius: 4px;
    transition: all .3s ease-in-out;

    .text-box {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 24px 40px;
      border-radius: 0 0px 4px 4px;
      background-color: $white;

      h2 {
        font-size: 18px;
        margin: 0;
      }

      .tags {
        margin-top: 8px;
      }
    }

    &:hover {
      //transform: scale(1.0125);
      box-shadow: 0 30px 40px 0 rgba(224, 228, 237, .8);
      transform: $card-hover;
      box-shadow: $card-box-shadow-hover;
    }
  }
}

//-- DARKMODE --//
body.darkmode .workshop-card .content {
  box-shadow: $card-box-shadow-dark;
  &:hover {
    box-shadow: $card-box-shadow-dark-hover;
  }
}
</style>
