<!-- Navbar -->
<template>
  <div class="navbar">
      <hamburger :is-active="true" class="hamburger-container" />
      <breadcrumb class="breadcrumb-container" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  }
}

</script>

<style scoped>

</style>
