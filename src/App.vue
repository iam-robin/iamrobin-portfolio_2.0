<template>
  <div id="app" class="darkmode">
    <Sidebar/>
    <div id="content">
      <!-- add transition classes to router views-->
      <transition name="router-animation">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/molecules/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
@import 'scss/app.scss';
</style>
