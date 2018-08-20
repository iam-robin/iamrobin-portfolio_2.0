<template>
  <div class="sam">
    <ProjectBgImage
      src="mediacamp/website1.png"
      alt="mediacamp website mockup"
      color="#304B59"
      heightContainer="600px"
      heightImg="60%"
    />
    <div class="project-container">
      <ProjectInfo
        title="SAM"
        :tags="['UX Design', 'UI Design', 'Frontend']"
        description="Beschreibung"
        year="2018"
        :tools="['sketch', 'zeplin', 'vue', 'webpack', 'html', 'sass', 'js']"
      />
      <ProjectSection
        headline="Abschnitt"
        text="Beschreibung Abschnitt"
      />
    </div>
    <ProjectNavigation
      prev="/projects/mediacamp"
      next="/projects/augsburginteilen"
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
  name: 'sam',
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