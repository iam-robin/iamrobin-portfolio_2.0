<template>
  <div class="projects">
    <router-link to="projects/sam">
      <ProjectCard 
        title="SAM"
        description="Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500."
        color="#304B56"
        :tags="['UX Design', 'UI Design', 'Frontend']"
        number="01"
        src="sam/logo.svg"
        alt="teaser image"
        width="20%"
      />
    </router-link>

    <router-link to="projects/augsburginteilen">
      <ProjectCard
        title="Augsburg in Teilen."
        description="Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500."
        color="#E68361"
        :tags="['Datenvisualisierung', 'UI Design', 'Frontend']"
        number="02"
        src="augsburg/map3.svg"
        alt="teaser image"
        width="30%"
      />
    </router-link>

    <router-link to="projects/meaningfulanimations">
      <ProjectCard
        title="Meaningful Animations"
        description="Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500."
        color="#5861F4"
        :tags="['UX Design', 'Motion', 'Bachelorarbeit']"
        number="03"
        src="ma/list.svg"
        alt="teaser image"
        width="38%"
      />
    </router-link>

    <router-link to="projects/mediacamp">
      <ProjectCard
        title="media.camp"
        description="Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500."
        color="#F7BE40"
        :tags="['Organisation', 'Identity', 'Frontend']"
        number="04"
        src="mediacamp/logo.svg"
        alt="media camp image"
        width="25%"
      />
    </router-link>
  </div>
</template>

<script>
import ProjectCard from '@/components/molecules/ProjectCard.vue'

export default {
  name: 'projects',
  components: {
    ProjectCard
  }
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}

.projects a:last-child .project-card {
  margin-bottom: 0;
}

</style>