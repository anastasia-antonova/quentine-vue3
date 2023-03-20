<template lang="pug">
section
  .left
    img(src="@/assets/images/logo.svg", alt="logo")
    .content
  .image-right
    img(src="@/assets/images/img.png", alt="vhg")
router-view
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
body {
  section {
    display: flex;
    justify-content: space-between;
    .left {
      width: 60%;
      padding: 48px;
    }
    .image-right {
      img {
        width: 601px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
