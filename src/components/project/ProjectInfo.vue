<template>
  <div class="project-info">
    <div class="left-container">
      <h1>{{title}}</h1>
    </div>
    <div class="right-container">
      <p class="description">{{description}}</p>
      <div class="meta-container">
        <div class="subheadline">JAHR</div>
        <div class="year">{{year}}</div>
      </div>
      <div class="meta-container">
        <div class="subheadline">ROLLE</div>
        <ul class="tags">
          <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
        </ul>
      </div>
      <div class="meta-container">
        <div class="subheadline">TOOLS</div>
        <tools :tools="tools"/>
      </div>
    </div>
  </div>
</template>

<script>
import Tools from '@/components/atoms/Tools.vue'
export default {
  name: 'ProjectInfo',
  props: {
    title: String,
    tags: Array,
    description: String,
    year: String,
    tools: Array,
  },
  components: {
    Tools
  }
}
</script>

<style scoped lang="scss">
.project-info {
  display: flex;

  .left-container {
    width: calc(100% / 3 * 1);

    h1 {
      margin: 0;
    }
  }

  .right-container {
    width: calc(100% / 3 * 2);
    margin-left: 40px;

    p {
      margin-top: 0;
      padding-bottom: 16px;
    }

    .meta-container {
      display: flex;
      margin-top: 24px;

      &:nth-child(2) {
        margin-top: 40px;
      }

      &:nth-child(4) {
        margin-top: 28px;
      }

      .subheadline {
        width: 40px;
        color: $black;
        margin-right: 32px;
        align-self: center;
        font-size: 11px;
        font-weight: $bold;
      }

      .year {
        color: $grey;
        font-family: $mono;
      }

      .tags {
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          display: inline-block;
          margin-right: 8px;
          color: $grey;
          font-family: $mono;
          font-size: 15px;

          &:after {
            margin-left: 8px;
            content: '/';
            display: inline-block;
          }
          &:last-child:after {
            display:none;
          }
        }
      }
    }
  }
}

//-- DARKMODE --//
body.darkmode .project-info {
  h1 {
    color: $white;
  }
  p {
    color: $grey;
  }
  .meta-container {
    .subheadline {
      color: $darkgrey;
    }
    .year {
      color: $grey;
    }
    .tags li {
      color: $grey;
    }
  }
}

</style>
