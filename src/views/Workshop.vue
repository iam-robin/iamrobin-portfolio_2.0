<template>
  <div class="workshop">
    <div class="workshop-container">
      <router-link to="workshop/braun">
        <WorkshopCard
          title="Braun Produkte"
          :tags="['Illustration', 'Grafik']"
          color="#6CD8BE"
          src="braun/preview.png"
          alt="teaser image"
          width="32%"
        />
      </router-link>
      <router-link to="workshop/looper">
        <WorkshopCard
          title="Looper"
          :tags="['Generative Art', 'Illustration']"
          color="#F4B93D"
          src="looper/preview.png"
          alt="teaser image"
          width="30%"
        />
      </router-link>
      <router-link to="workshop/silenceandflow">
        <WorkshopCard
          title="Silence and Flow"
          :tags="['Logo', 'Branding', 'Entwürfe']"
          color="#C6EBE2"
          src="silenceflow/preview.png"
          alt="teaser image"
          width="16%"
        />
      </router-link>
      <router-link to="workshop/hold">
        <WorkshopCard
          title="HOLD"
          :tags="['mobile App', 'Konzept']"
          color="#4465F4"
          src="hold/preview.png"
          alt="teaser image"
          width="20%"
        />
      </router-link>
      <router-link to="workshop/eye">
        <WorkshopCard
          title="Auge"
          :tags="['tag', 'tag', 'tag']"
          color="#CED4DF"
          src="eye/preview.png"
          alt="teaser image"
          width="15%"
        />
      </router-link>
      <router-link to="workshop/bundesliga">
        <WorkshopCard
          title="Bundesliga Visualisierung"
          :tags="['tag', 'tag', 'tag']"
          color="#3C464C"
          src="bundesliga/preview.png"
          alt="teaser image"
          width="20%"
        />
      </router-link>
      <WorkshopCard
        title="Labyrinth"
        :tags="['p5.js', 'generative Art']"
        color="#3C464C"
        src="labyrinth/preview.png"
        alt="teaser image"
        width="30%"
      />
      <WorkshopCard
        title="one tree"
        :tags="['tag', 'tag', 'tag']"
        color="#34C7BA"
        src="onetree/preview.png"
        alt="teaser image"
        width="15%"
      />
      <WorkshopCard
        title="Micro Animations"
        :tags="['tag', 'tag', 'tag']"
        color="#5861F4"
        src="microanimation/preview.png"
        alt="teaser image"
        width="25%"
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
