<template>
  <div class="project-container">
    <h1>Robin Spielmann</h1>
    <v-lazy-image :src="require(`@/assets/me3.jpg`)" alt="portrait image" class="portrait"/>
    <ul>
      <li>Kaffee</li>
      <li>Premiere Leauge</li>
      <li>Fahrräder</li>
      <li>Mate</li>
      <li>Woody Allen</li>
      <li>Analog Fotografie</li>
      <li>Indie Musik</li>
      <li>Filme</li>
      <li>Stühle</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'about'
}
</script>

<style scoped lang="scss">
@import '@/scss/project.scss';

.portrait {
  width: 100%;
}
</style>