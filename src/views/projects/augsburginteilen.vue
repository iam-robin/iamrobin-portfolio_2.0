<template>
  <div class="augsburginteilen">
    <ProjectBgImage
      src="augsburg/map3.svg"
      alt="mediacamp website mockup"
      color="#E68361"
      heightContainer="600px"
      heightImg="60%"
    />
    <div class="project-container">
      <ProjectInfo
        title="Augsburg in Teilen."
        :tags="['Datenvisualisierung', 'UI Design', 'Frontend']"
        description="xxx"
        year="2018"
        :tools="['sketch', 'framer', 'd3', 'sass', 'git', 'webpack']"
      />
      <ProjectSection
        headline="xxx"
        text="xxx"
      />
    </div>
    <ProjectNavigation
      prev="/projects/meaningfulanimations"
      next="/projects/sam"
    />
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
  name: 'augsburginteilen',
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