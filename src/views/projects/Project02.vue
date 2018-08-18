<template>
  <div class="project02">
    <ProjectBgImage
      src="mediacamp/website1.png"
      alt="mediacamp website mockup"
      color="#5861F4"
      heightContainer="600px"
      heightImg="60%"
    />
    <div class="project-container">
      <ProjectInfo
        title="Meaningful Animations"
        :tags="['UX Design', 'Motion', 'Bachelorarbeit']"
        description='"Meaningful Animations - Animationen in Microinteractions im Hinblick auf die Auswirkung der User Experience mobiler Anwendungen" – Im Zuge meiner Bachelorarbeit erarbeitete ich ein Kriterienkatalog für Meaningful Animations, welcher anschließend in einem Nutzertest mit dem Einsatz von Prototypen ausgewertet wurde.'
        year="2017"
        :tools="['sketch', 'framer','after-effects', 'markdown']"
      />
      <ProjectSection
        headline="xxx"
        text="xxx"
      />
    </div>
    <ProjectNavigation
      prev="/projects/project04"
      next="/projects/project02"
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
  name: 'project02',
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