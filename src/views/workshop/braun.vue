<template>
  <div class="braun">
    <div class="project-container">
      <ProjectInfo
        title="Braun Produkt Illustrationen"
        :tags="['Illustration', 'Grafik']"
        description="Braun, und insbesondere Dieter Rams, haben die moderne Formgebung im Produkt-Design stark geprägt. Um mich in die Thematik der Illustration einzuarbeiten habe ich diverse Produkte von Braun mit simplen Vektorformen visualisiert."
        year="2018"
        :tools="['sketch']"
      />
      <ProjectSection
        headline="Illustrationen"
      />
      <ProjectImage
        src="workshop/braun/radio.png"
        alt="Braun Radio"
      />
      <ProjectImage
        src="workshop/braun/watch.png"
        alt="Braun Watch"
      />
      <ProjectImage
        src="workshop/braun/calc.png"
        alt="Braun Calculator"
      />
    </div>
  </div>
</template>

<script>
import ProjectInfo from '@/components/project/ProjectInfo.vue'
import ProjectSection from '@/components/project/ProjectSection.vue'
import ProjectImage from '@/components/project/ProjectImage.vue'
import ProjectBgImage from '@/components/project/ProjectBgImage.vue'
import ProjectNavigation from '@/components/project/ProjectNavigation.vue'
import Tags from '@/components/atoms/Tags.vue'

export default {
  name: 'braun',
  components: {
    ProjectInfo,
    ProjectSection,
    ProjectImage,
    ProjectBgImage,
    ProjectNavigation,
    Tags
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/project.scss';
</style>