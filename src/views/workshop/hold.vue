<template>
  <div class="project-container">
    <ProjectInfo
      title="HOLD"
      :tags="['mobile App', 'Konzept']"
      description="Konzeptionelle und visuelle Umsetzung der mobilen Applikation HOLD. Diese Anwendung dient als spekulatives Design ein Bewusstsein für die Schnellebigkeit der heutigen Gesellschaft zu schaffen."
      year="2017"
      :tools="['Notizbuch','sketch']"
    />
    <ProjectSection
      headline="Konzept"
      text="Die App hat einen Sinn: Wie lange schafft es der Nutzer seinen Finger auf dem Display zu halten, ohne ihn abzusetzen? Aufgrund der schnelllebigen und informationsüberfluteten Gesellschaft wird der Nutzer durch diese Anwendung dazu gezwungen, bewusst auszuharren und nichts zu tun. Wer es am längsten durchhält, erzielt den Highscore! Die Anwendung besteht ausschließlich aus einer Interaktion. Hält der User seinen Finger auf den start-screen beginnt der Timer zu laufen. Sobald diese Interaktion abgebrochen wird, findet sich der Nutzer auf dem game-over-screen wieder und kann durch die identische Interaktion das Ausharren neu beginnen."
    />
    <ProjectImage
      src="workshop/hold/konzept.png"
      alt="HOLD Konzept"
    />
    <ProjectSection
      headline="Use Case"
    />
    <ProjectSection
      headline="Visual Design"
      text="Die Hauptaufgabe des Designs ist es, dem Nutzer ohne ein explizites Onboarding die Funktion und den Ablauf der Anwendung nahe zu bringen. Zudem wird die Interaktion durch eine Puls-Animation, welche um den Finger des Nutzers angezeigt wird, gestützt und gibt diesem direktes Feedback."
    />
    <ProjectImage
      src="workshop/hold/screens.png"
      alt="HOLD Konzept"
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
  name: 'Hold',
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