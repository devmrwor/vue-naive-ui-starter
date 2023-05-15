<script lang="ts" setup>
import { NIcon } from 'naive-ui'

import type { PropType } from 'vue'
import type { IconTypes } from './useIcon'
import { icons } from './useIcon'

const props = defineProps({
  ...NIcon.props,
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
