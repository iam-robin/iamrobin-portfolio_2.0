<template>
  <div class="sidebar">
    <router-link to="/">
      <div class="logo">
        <p class="logo-name">Robin Spielmann</p>
        <p class="logo-desc">Digitaler Macher</p>
      </div>
    </router-link>
    <span class="wave"></span>
    <div class="nav">
      <router-link to="/projects">
        01<span class="line"></span>Projekte
      </router-link>
      <router-link to="/workshop">
        02<span class="line"></span>Werkstatt
      </router-link>
      <router-link to="/darkroom">
        03<span class="line"></span>Dunkelkammer
      </router-link>
      <router-link to="/about">
        04<span class="line"></span>Über mich
      </router-link>
    </div>
    <div class="contact">
      <div class="social">
        <a href="https://twitter.com/iamrob_in" alt="twitter" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']"/>
        </a>
        <a href="https://www.instagram.com/iamrob.in/" alt="instagram" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']"/>
        </a>
        <a href="https://dribbble.com/iamrobin" alt="dribbble" target="_blank">
          <font-awesome-icon :icon="['fab', 'dribbble']"/>
        </a>
      </div>
      <div class="links">
        <router-link to="/privacy">
          <a href="#" alt="Datenschutz">Datenschutz</a>
        </router-link>
        <router-link to="/impressum">
          <a href="#" alt="Impressum">Impressum</a>
        </router-link>
          <span v-on:click="changemode" class="bulb">💡</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    changemode: function () {
      let body = document.getElementsByTagName('body')[0];
      body.classList.toggle("darkmode");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  width: 280px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  //background-color: $white;
  padding: 64px 0 48px 48px;
  box-sizing: border-box;
  transition: background-color .3s ease-in-out;
  

  a {
    text-decoration: none;
  }

  .logo {
    font-family: $sans;

    &-name {
      font-size: 16px;
      font-weight: $bold;
      margin: 0;
      color: $black;
      transition: color .3s ease-in-out;
    }

    &-desc {
      font-family: $mono;
      font-size: 14px;
      margin: 0;
      color: $black;
      transition: color .3s ease-in-out;
    }
  }

  .wave {
    display: inline-block;
    height: 4px;
    width: 80px;
    margin-top: 16px;
    background-image: url('~@/assets/wave2.svg');
    background-size: contain;
    //background-color:#FEC868;
  }

  .nav {
    margin-top: 120px;
    a {
      position: relative;
      color: $grey;
      display: block;
      padding: 12px 0;
      transition: all 0.3s ease-in-out;

      .line {
        display: inline-block;
        width: 0px;
        margin: 0 6px;
        height: 1px;
        margin-bottom: 4px;
        background-color: $grey;
        transition: all .3s ease-in-out;
      }

      &:hover .line {
       width: 12px; 
      }

      &.router-link-active {
        color: $black;

        .line {
          width: 16px;
          background-color: $darkgrey;
        }
      }
    }
  }

  .contact {
    margin-top: auto;

    .social {
      margin-left: -12px;
      margin-bottom: 16px;
      display: flex;

      a {
        display: inline-block;
        padding: 8px 10px;
        color: $black;
        font-size: 18px;
        transition: all .3s ease-in-out;

        &:hover {
          transform: translateY(-2px);

          &:nth-child(1) {
            color: #60BDEA;
          }
          &:nth-child(2) {
            color: #FEC868;
          }
          &:nth-child(3) {
            color: #D77CA5;
          }
        }
      }
    }

    .links a {
      display: block;
      font-size: 14px;
      color: $grey;

      &:first-child {
        margin-bottom: 8px;
      }
    }

    .bulb {
      position: absolute;
      bottom: 8px;
      left: 8px;
      display: inline-block;
      cursor: pointer;
      font-size: 20px;
    }
  }
}

//-- DARKMODE --//
body.darkmode .sidebar {
  //background-color: $black;

  .logo-name {
    color: $white;
  }

  .logo-desc {
    color: $grey;
  }

  .nav a {
    color: $darkgrey;
    .line {
      background-color: $darkgrey;
    }
    &.router-link-active {
      color: $grey;
      .line {
        background-color: $grey;
      }
    }
  }

  .contact {
    .social a {
      color: $grey;
    }
    .links a {
      color: $darkgrey;
    }
  }
}


@media only screen and (max-width: $mobile-breakpoint) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    padding: 64px;
  }
}
</style>
