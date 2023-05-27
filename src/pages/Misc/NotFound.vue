<script setup lang="ts">
import useNavigation from '@/composables/navigation'

const { router } = useNavigation()
</script>

<template>
  <n-button @click="router.push('/')">
    Back home
  </n-button>
</template>
