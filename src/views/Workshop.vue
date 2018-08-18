<template>
  <div class="workshop">
    <div class="workshop-container">
      <WorkshopCard
        title="project title"
        :tags="['tag', 'tag', 'tag']"
        color="#F4B93D"
      />
      <WorkshopCard
        title="project title"
        :tags="['tag', 'tag', 'tag']"
        color="#4465F4"
      />
      <WorkshopCard
        title="project title"
        :tags="['tag', 'tag', 'tag']"
        color="#2C3135"
      />
      <WorkshopCard
        title="project title"
        :tags="['tag', 'tag', 'tag']"
        color="#34C6BA"
      />
      <WorkshopCard
        title="project title"
        :tags="['tag', 'tag', 'tag']"
        color="#F4B93D"
      />
      <WorkshopCard
        title="project title"
        :tags="['tag', 'tag', 'tag']"
        color="#AAB2BD"
      />
      <WorkshopCard
        title="project title"
        :tags="['tag', 'tag', 'tag']"
        color="#2C3135"
      />
      <WorkshopCard
        title="project title"
        :tags="['tag', 'tag', 'tag']"
        color="#EB5667"
      />
      <WorkshopCard
        title="project title"
        :tags="['tag', 'tag', 'tag']"
        color="#34C7BA"
      />
    </div>
  </div>
</template>

<script>
import WorkshopCard from '@/components/molecules/WorkshopCard.vue'

export default {
  name: 'workshop',
  components: {
    WorkshopCard
  }
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.workshop {
  margin-right: calc(-#{$gutterSize} / 2);
  margin-bottom: calc(-#{$gutterSize} / 2);
}

.workshop-container {
  &:after {
    content: '';
    clear: both;
    display: block;
  }
}



</style>
