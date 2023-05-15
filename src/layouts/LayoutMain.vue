<script setup lang="ts">
import { LayoutContent, LayoutHeader, LayoutSidebar } from './components'
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
