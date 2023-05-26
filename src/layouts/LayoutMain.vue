<script setup lang="ts">
import { LayoutHeader, LayoutSidebar } from './components'

const LayoutContent = defineAsyncComponent(() => import('./components/LayoutContent.vue'))
</script>

<template>
  <NLayout position="absolute" has-sider>
    <LayoutSidebar />
    <NLayout>
      <LayoutHeader />
      <LayoutContent />
    </NLayout>
  </NLayout>
</template>
