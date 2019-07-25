<script>

export default {
  render(h) {
    return this.$route.meta.layout(h)
  },
}
</script>

<style lang="stylus">
.layout1
  display flex
  flex-direction row

.layout2
  display flex
  flex-direction column
</style>
