<template>
  <div class="meaningfulanimations">
    <ProjectBgImage
      src="ma/header.png"
      alt="meaningful animations header image"
      color="#5861F4"
      heightContainer="600px"
      heightImg="40%"
    />
    <div class="project-container">
      <ProjectInfo
        title="Meaningful Animations"
        :tags="['UX Design', 'Motion', 'Bachelorarbeit']"
        description='"Meaningful Animations - Animationen in Microinteractions im Hinblick auf die Auswirkung der User Experience mobiler Anwendungen" – Im Zuge meiner Bachelorarbeit erarbeitete ich ein Kriterienkatalog für Meaningful Animations, welcher anschließend in einem Nutzertest mit dem Einsatz von Prototypen ausgewertet wurde.'
        year="2016-2017"
        :tools="['sketch', 'framer','after-effects', 'markdown']"
      />
      <ProjectSection
        headline="Abstract"
        text="In der realen Welt ist es alltäglich und normal, dass Zustandsänderungen durch einen Bewegungsablauf erfolgen. Wird eine Türe geöffnet, geschieht dies nicht abrupt, sondern durch eine Bewegung. In der digitalen Welt spielt sich hingegen das exakte Gegenteil ab. Digitale Anwendungen, wie Websites und mobile Applikationen basieren auf Binärcode, welcher ausschließlich aus Nullen und Einsen besteht. Diesbezüglich werden Zustandsänderungen standardmäßig abrupt und ohne Übergang dargestellt. Mit Hilfe von Animationen können jedoch realistische Bewegungsabläufe, welche der Mensch gewohnt ist, simuliert werden. Das Ziel dieser Bachelorarbeit ist es herauszufinden, ob der Einsatz von Animationen in mobilen Applikationen eine Auswirkung auf deren User Experience hat und wie Animationen eingesetzt und gestaltet werden müssen, damit diese Auswirkung positiv ausfällt. Durch einen Nutzertest wird ein direkter Vergleich zwischen zwei Prototypen, welche sich ausschließlich durch die Verwendung von Animationen unterscheiden, gezogen. Durch die Differenz der Ergebnisse konnte im Zuge dieser Bachelorarbeit die Auswirkung von Animationen auf die UX bestimmt werden."
      />
      <ProjectSection
        headline="Nutzertest"
        text="Für den Nutzertest wurden zwei Prototypen mit der Software Framer programmiert. Prototyp A beinhaltet keine Animationen, wohingegen die Microinteractions in Prototyp B durch Meaningful Animations gestützt sind. Die Prototypen bilden eine simple To-Do-Listen Applikation ab und erlauben das hinzufügen, löschen und umsortieren von Listenelemente. Zudem kann ein Seitenmenü ein- und ausgeblendet werden."
      />
      <ProjectImage
        src="projects/ma/konzept.png"
        alt="meaningful animations konzept"
      />
      <ProjectImage
        src="projects/ma/prototypen.png"
        alt="meaningful animations prototypen"
      />
      <ProjectSection
        headline="Ergebnis"
        text="Die Auswertung des Nutzertests ergab, dass 7 der 20 berücksichtigten Testpersonen keinen bewussten Unterschied zwischen Prototyp A und Prototyp B feststellten. Demzufolge konnte durch die Methodik dieses Nutzertests die unbewusste Wahrnehmung von Animationen und deren Auswirkung auf die UX nicht erfasst und somit nicht gemessen werden. Durch die Ergebnisse der restlichen 13 Testpersonen konnte jedoch ein Unterschied zwischen den getesteten Prototypen festgestellt werden. Sowohl die pragmatische, als auch die hedonische Qualität wurde bei Prototyp B, der Anwendung mit Animationen, besser bewertet. Dass dieser Unterschied zufällig zustande kam, ist auszuschließen, da die Reihenfolge der Prototypen im Nutzertest geändert wurde und der Umfang der Stichprobe ausreicht, um eine wissenschaftlich relevante Aussage treffen zu können."
      />
    </div>
    <ProjectNavigation
      prev="/projects/augsburginteilen"
      next="/projects/mediacamp"
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
  name: 'meaningfulanimations',
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