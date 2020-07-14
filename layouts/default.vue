<template lang="pug">
main.min-h-screen
  header.mip-nav-wrapper
    mip-nav-slidedown(
      data-id="bs-navbar"
      class="mip-element-sidebar container"
      data-showbrand="1"
      data-brandname="BOHE")
      #bs-navbar.navbar-collapse.collapse.navbar.navbar-static-top
        ul.nav.navbar-nav.navbar-right
          li
            a(href="javascript:void") 首页
          li
            a(href="javascript:void") 充值活动
          li
            a(href="javascript:void") 游戏支持
          li
            a(href="javascript:void") 官方公告
          li
            a(href="javascript:void") 关于BOHE
          li.navbar-wise-close
            span#navbar-wise-close-btn
  section
    nuxt
</template>
<script>
export default {
  head() {
    return {
      script: [
        {
          src:
            'https://c.mipcdn.com/static/v2/mip-nav-slidedown/mip-nav-slidedown.js'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  background: black;
  color: snow;
}
section {
}
</style>
