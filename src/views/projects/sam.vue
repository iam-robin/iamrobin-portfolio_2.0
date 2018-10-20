<template>
  <div class="sam">
    <ProjectBgImage
      src="sam/header.png"
      alt="sam header"
      color="#304B59"
      heightContainer="600px"
      heightImg="50%"
    />
    <div class="project-container">
      <ProjectInfo
        title="SAM"
        :tags="['UX Design', 'UI Design', 'Frontend']"
        description="Im Rahmen eines einjährigen Masterprojekts des Studiengangs »Interaktive Mediensysteme« der Hochschule Augsburg konzepierte, gestaltete und entwickelte ich in einem Team von acht Masterstudenten die Web-Applikation »SAM«. Die webbasierte Anwendung ermöglicht Kurs- und Projektanmeldungen für Studierende an der Hochschule Augsburg. Dozenten erstellen Kurse und Projekte, in welche sich anschließend Studierende in Form von Prioritätslisten eintragen. Darauf folgend teilt ein Zuteilungsalgorithmus die Studierende auf einzelne Kurse und Projekte zu."
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