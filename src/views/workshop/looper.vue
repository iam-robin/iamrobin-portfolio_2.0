<template>
  <div class="project-container">
    <ProjectInfo
      title="Looper"
      :tags="['Generative Art', 'Illustration']"
      description="Diese generierten Illustrationen wurden mit dem Sketch Plugin Looper erstellt. Durch das Duplizieren, Bewegen und Rotieren einer Grundform entstehen abstrakte Formen."
      year="2018"
      :tools="['sketch', 'looper']"
    />
    <ProjectSection
      headline="Illustrationen"
    />
    <ProjectImage
      src="workshop/looper/v1.png"
      alt="Looper Version 01"
    />
    <ProjectImage
      src="workshop/looper/v2.png"
      alt="Looper Version 02"
    />
    <ProjectImage
      src="workshop/looper/v3.png"
      alt="Looper Version 03"
    />
    <ProjectImage
      src="workshop/looper/v4.png"
      alt="Looper Version 04"
    />
    <ProjectImage
      src="workshop/looper/v5.png"
      alt="Looper Version 05"
    />
    <ProjectImage
      src="workshop/looper/v6.png"
      alt="Looper Version 06"
    />
    <ProjectImage
      src="workshop/looper/v7.png"
      alt="Looper Version 07"
    />
    <ProjectImage
      src="workshop/looper/v8.png"
      alt="Looper Version 08"
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
  name: 'looper',
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