<template>
  <ul class="tags">
    <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
  </ul>
</template>

<script>
export default {
  name: 'tags',
  props: {
    tags: Array
  }
}
</script>

<style scoped lang="scss">

.tags {
  margin: 0;
  padding: 0;
  margin-top: 24px;
  font-family: $mono;
  font-size: 12px;
  color: $grey;
  transition: color .3s ease-in-out;

  li {
    display: inline-block;
    list-style: none;
    margin-top: 8px;
    margin-right: 12px;

    &:after {
      content: '/';
      padding-left: 12px;
      display: inline-block;
    }

    &:last-child:after {
      display: none;
    }
  }
}
</style>
