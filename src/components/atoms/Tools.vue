<template>
  <ul class="tools">
    <li v-for="tool in items" :key="tool.name" :style="{ backgroundImage: `url(${tool.img})` }" :data-tooltip="tool.name">
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tools',
  props: {
    tools: Array
  },
  computed: {
    items () {
      return this.tools.map(tool => {
        return {
          name: tool,
          // the trick is letting webpack parse the URL path for you
          img: require(`@/assets/icons/${tool}.svg`)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.tools {
  margin: 0;
  padding: 0;
  height: 18px;

  li {
    list-style: none;
    display: inline-block;
    position: relative;
    background-image: url('/assets/icons/html.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    height: 18px;
    width: 16px;
    margin-right: 16px;
  }

  /* Add this attribute to the element that needs a tooltip */
  [data-tooltip] {
    position: relative;
    z-index: 99;
    cursor: pointer;
  }

  &:hover [data-tooltip]:before {
    transform: translateY(0px);
  } 

  /* Hide the tooltip content by default */
  [data-tooltip]:before,
  [data-tooltip]:after {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  [data-tooltip]:before {
    position: absolute;
    bottom: 150%;
    left: 50%;
    margin-bottom: 5px;
    margin-left: -43px;
    padding: 8px;
    width: 80px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: $black;
    color: $white;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 12px;
    line-height: 1.5;
    font-family: $mono;
    transform: translateY(8px);
    transition: transform .3s ease-out;
  }

  /* Triangle hack to make tooltip look like a speech bubble */
  [data-tooltip]:after {
    position: absolute;
    bottom: 150%;
    left: 50%;
    margin-left: -6px;
    width: 0;
    border-top: 6px solid $black;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    content: " ";
    font-size: 0;
    line-height: 0;
  }

  /* Show tooltip content on hover */
  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
    visibility: visible;
    opacity: 1;
  }
}

//-- DARKMODE --//
body.darkmode .tools {
  [data-tooltip]:before {
    background-color: $lightgrey;
    color: $black;
  }
  [data-tooltip]:after {
    border-top: 6px solid $lightgrey;
  }
}
</style>
