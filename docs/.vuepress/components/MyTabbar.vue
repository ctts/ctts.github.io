<template>
  <tabbar
    :tabs="tabs"
    class="tabbar"
  >
    <template #home>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#ct-faxian1"></use>
      </svg>
    </template>
    <template #_home>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#ct-faxian2"></use>
      </svg>
    </template>
    <template #search>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#ct-star-copy"></use>
      </svg>
    </template>
    <template #_search>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#ct-wujiaoxing_kong"></use>
      </svg>
    </template>
    <template #person>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#ct-gerenzhongxin1"></use>
      </svg>
    </template>
    <template #_person>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#ct-icon7"></use>
      </svg>
    </template>
  </tabbar>
</template>

<script>
import Tabbar from './Tabbar'
export default {
  name: 'MyTabbar',
  data () {
    return {
      tabs: [
        {
          name: 'home',
          routerLink: '/pages/myComponents/#签名',
          isActive: true
        },
        {
          name: 'search',
          routerLink: '/pages/myComponents/#签名',
        },
        {
          name: 'person',
          routerLink: '/pages/myComponents/#签名',
        }
      ]
    }
  },
  components: {
    Tabbar
  }
}
</script>

<style lang="less" scoped>
.icon {
  width: 20px;
  height: 20px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
