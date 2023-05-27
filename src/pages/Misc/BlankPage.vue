<script lang="ts">
export default defineComponent({
  activated() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({
      path: `/${typeof path === 'string' ? path : path.join('/')}`,
      query,
    })
  },
})
</script>

<template>
  <div />
</template>
