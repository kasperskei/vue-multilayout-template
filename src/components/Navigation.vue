<template lang="pug">
  nav
    router-link(to="/layout1") layout1
    | &nbsp;|&nbsp;
    router-link(to="/layout2") layout2
</template>

<script>
export default {
  mounted() {
    console.log('Navigation is mounted!')
  },
}
</script>
