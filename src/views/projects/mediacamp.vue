<template>
  <div class="project">
    <ProjectBgImage class="header-image"
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
        text="Das media.camp ist ein Barcamp in den Räumlichkeiten der Fakultät »Digitale Medien« der Hochschule Furtwangen. Im Zuge des media.camp treffen sich einmal im Semester Medienstudenten und externe Speaker aus der freien Wirtschaft und sorgen in Form von Vorträgen und Workshops für einen Wissensaustausch rund um das Thema digitale Medien. Supporter wie t3n und ZEIT Campus sorgen zudem für die passende Leselektüre in Form von kostenlosen Magazinen."
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
        text="Einer meiner ersten Aufgaben war es, die Coperate Identity des media.camps zu überarbeiten. In diesem Zuge wurde das Logo vereinfacht und die serifenlose Font »Lato« für ein neues Schriftbild eingeführt. Zudem wurden die Primärfarben überarbeitet, welche im Einsatz von Farbakzenten für Wiedererkennung sorgen sollen."
      />
      <ProjectImage
        src="projects/mediacamp/styleguide.png"
        alt="mediacamp styleguide"
      />
      <ProjectImage
        src="projects/mediacamp/poster2.png"
        alt="mediacamp poster design"
      />
      <ProjectSection
        headline="Website"
        text="Zudem sorgte ich für einen Relaunch der Website. Hauptaufgabe des neuen Webauftritts war es, die Informationen des Barcamps leicht zugänglich zu gestalten und übersichtlich aufzubereiten. Zudem sollte das Design der Website auf die überarbeitete Corporate Identity angepasst werden und das moderne und leichtgewichtige Gefühl des media.camp repräsentieren."
      />
      <ProjectImage
        src="projects/mediacamp/konzept.png"
        alt="mediacamp Konzept"
      />
      <ProjectImage
        src="projects/mediacamp/desktop.png"
        alt="mediacamp desktop version"
      />
      <ProjectSection
        headline="Installation"
        text="Ein bis zwei Wochen vor Beginn des Barcamp wurde im Hauptgebäude der Fakultät »Digitale Medien« der Hochschule Furtwangen ein großflächer Timer an eine der Innenwände projiziert. Neben Social-Media-Kampagnen war die Installation der größte Baustein um die Studierenden auf das Event aufmerksam zu machen."
      />
      <ProjectImage
        src="projects/mediacamp/timer.png"
        alt="mediacamp timer"
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
  name: 'mediacamp',
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