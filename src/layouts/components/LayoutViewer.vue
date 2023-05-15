<script lang="ts" setup>
import { useLoadingBar, useMessage } from 'naive-ui'
import router from '@/router'

window.$message = useMessage()

const loadingBar = useLoadingBar()

router.beforeEach(() => loadingBar?.start())

router.afterEach(() => loadingBar?.finish())
</script>

<template>
  <router-view />
</template>
