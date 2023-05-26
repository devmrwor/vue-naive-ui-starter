<script lang="ts" setup>
import { NIcon, iconProps } from 'naive-ui'

import type { PropType } from 'vue'
import type { IconTypes } from './useIcon'
import { icons } from './useIcon'

const props = defineProps({
  ...iconProps,
  type: {
    type: String as PropType<IconTypes>,
    default: 'fallback',
  },
})

const icon = icons[props.type as IconTypes]
</script>

<template>
  <NIcon v-bind="props">
    <icon />
  </NIcon>
</template>
