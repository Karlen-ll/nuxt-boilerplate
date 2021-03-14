<template>
  <div class="index-page">
    <div class="container">
      <div class="icon-wrapper">
        <Logo />
      </div>

      <h1 class="title">Chillicode Nuxt.js Boilerplate</h1>

<!--      <TestIcon />-->

      <div class="links-wrapper">
        <a href="https://github.com/chillicode-dev/nuxt-js-boiler" target="_blank">Boilerplate Docs</a>
        <a href="https://nuxtjs.org/docs/2.x/get-started/installation" target="_blank">Nuxt.js Docs</a>

        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
// import TestIcon from '@/static/assets/icons/test-icon.svg';

export default {
  components: {
    // TestIcon,
    Logo
  },
};
</script>

<style lang="scss" scoped>
.index-page {
  padding: 150px;
  text-align: center;
}

.container {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 660px;
}

.title {
  font-size: 48px;
}

.links-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
</style>
