<template>
  <div class="project-section">
    <div class="headline">
      <h2>{{headline}}</h2>
    </div>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectSection',
  props: {
    headline: String,
    text: String
  }
}
</script>

<style scoped lang="scss">
.project-section {
  padding: 160px 0 40px 0;
  display: flex;

  .headline {
    width: calc(100% / 3 * 1);
    h2 {
      padding-left: 32px;
      position: relative;
      display: inline-block;
      font-family: $mono;
      font-weight: $regular;
      font-size: 24px;

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        display: inline-block;
        height: 1px;
        width: 16px;
        margin-top: -1px;
        background-color: $black;
      }
    }
  }

  p {
    margin-left: 40px;
    width: calc(100% / 3 * 2);
  }
}

//-- DARKMODE --//
body.darkmode .project-section{
  .headline h2 {
    color: $white;
    &:after {
      background-color: $white;
    }
  }

  p {
    color: $grey;
  }
}

</style>
