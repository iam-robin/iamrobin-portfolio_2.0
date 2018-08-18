module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/scss/_colors.scss";
          @import "~@/scss/_typo.scss";
          @import "~@/scss/_variables.scss";
          @import "~@/scss/_breakpoints.scss";
        `
      }
    }
  }
};