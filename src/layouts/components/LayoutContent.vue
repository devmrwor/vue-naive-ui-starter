<template>
  <n-layout-content content-style="padding: 12px 24px">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </n-layout-content>
</template>
