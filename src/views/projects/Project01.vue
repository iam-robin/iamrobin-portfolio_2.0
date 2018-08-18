<template>
  <div class="project01">
    <ProjectBgImage
      src="mediacamp/website1.png"
      alt="mediacamp website mockup"
      color="#F0B731"
      heightContainer="600px"
      heightImg="60%"
    />
    <div class="project-container">
      <ProjectInfo
        title="media.camp"
        :tags="['Organisation', 'Identity', 'Frontend']"
        description="Zwischen 2015 und 2017 übernahm ich gemeinsam mit drei weiteren Studenten die Initialisierung und Leitung des media.camps – ein Barcamp von Studenten für Studenten an der Hochschule Furtwangen. Zu unseren Aufgaben zählten neben der Ak­qui­rie­rung von Supportern und Speakern, das Marketing, der öffentliche Auftritt und die Umsetzung des Barcamps."
        year="2015-2017"
        :tools="['html', 'sass','js', 'gulp', 'sketch']"
      />
      <ProjectSection
        headline="Barcamp"
        text="Das media.camp ist ein Barcamp in den Räumlichkeiten der Fakultät Digitale Medien der Hochschule Furtwangen. Im Zuge des media.camp treffen sich einmal im Semester Medienstudenten und externe Speaker aus der freien Wirtschaft und sorgen in Form von Vorträgen und Workshops für einen Wissensaustausch rund um das Thema digitale Medien. Supporter wie t3n und ZEIT Campus sorgen zudem für die passende Leselektüre in Form von kostenlosen Magazinen."
      />
      <div class="photo-gallery">
        <div class="image">
          <img src="@/assets/projects/mediacamp/photos/01.png" alt="mediacamp Foto">
        </div>
        <div class="image">
          <img src="@/assets/projects/mediacamp/photos/02.png" alt="mediacamp Foto">
        </div>
        <div class="image">
          <img src="@/assets/projects/mediacamp/photos/03.png" alt="mediacamp Foto">
        </div>
        <div class="image">
          <img src="@/assets/projects/mediacamp/photos/04.png" alt="mediacamp Foto">
        </div>
        <div class="image">
          <img src="@/assets/projects/mediacamp/photos/05.png" alt="mediacamp Foto">
        </div>
        <div class="image">
          <img src="@/assets/projects/mediacamp/photos/06.png" alt="mediacamp Foto">
        </div>
        <div class="image">
          <img src="@/assets/projects/mediacamp/photos/08.png" alt="mediacamp Foto">
        </div>
        <div class="image">
          <img src="@/assets/projects/mediacamp/photos/07.png" alt="mediacamp Foto">
        </div>
      </div>
      <ProjectSection
        headline="Identity"
        text="Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen."
      />
      <ProjectImage
        src="mediacamp/poster2.png"
        alt="mediacamp website mockup"
      />
      <ProjectSection
        headline="Website"
        text="Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen."
      />
      <ProjectImage
        src="mediacamp/konzept.png"
        alt="mediacamp Konzept"
      />
      <ProjectImage
        src="mediacamp/desktop.png"
        alt="mediacamp desktop version"
      />
      <ProjectSection
        headline="Installation"
        text="Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen."
      />
      <ProjectImage
        src="mediacamp/timer.png"
        alt="mediacamp timer"
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
  name: 'project01',
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
.project-container {

  .photo-gallery {
    display: flex;
    flex-wrap: wrap;

    .image {
      padding: 0 24px 24px 0;
      box-sizing: border-box;
      margin-bottom: -5px;
      flex: 0 0 25%;

      img {
        width: 100%;
      }
    }
  }
}
</style>