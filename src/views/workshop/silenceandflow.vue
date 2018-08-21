<template>
  <div class="project-container">
    <ProjectInfo
      title="Silence and Flow"
      :tags="['Logo', 'Entwürfe']"
      description="XXX"
      year="2017"
      :tools="['Notizbuch', 'sketch']"
    />
    <ProjectSection
      headline="Entwürfe"
    />
    <ProjectImage
      src="workshop/silenceflow/entwürfe.png"
      alt="Slience and Flow Logo Entwürfe"
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
  name: 'SilenceAndFlow',
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