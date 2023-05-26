<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { NLayoutSider, NMenu } from 'naive-ui'
import { RouterLink, useRoute } from 'vue-router'
import type { NavigationItem } from '@/config/navigation'
import { navigation } from '@/config/navigation'
import { Icon } from '@/components/shared'

const route = useRoute()
const menus = ref(navigation)

function mapping(items: NavigationItem[]): MenuOption[] {
  return items.map((item: NavigationItem) => ({
    ...item,
    key: item.name,
    label: item.name != null ? () => h(RouterLink, { to: item }, { default: () => item.label }) : item.label,
    icon: item.icon != null ? () => h(Icon as any, { type: item.icon }) : undefined,
    children: item.children && mapping(item.children),
  }))
}

const currentKey = ref<string>('')
const expandedKeys = ref<string[]>([])
const options = computed(() => (menus.value ? mapping(menus.value) : []))

function routeMatched(menu: NavigationItem): boolean {
  return (
    route.name === menu.name && (menu.params == null || JSON.stringify(route.params) === JSON.stringify(menu.params))
  )
}

function matchExpanded(items: NavigationItem[]): boolean {
  let matched = false
  for (const item of items) {
    if (item.children != null)
      matchExpanded(item.children) && expandedKeys.value.push(item.name)

    if (routeMatched(item)) {
      currentKey.value = item.name
      matched = true
    }
  }

  return matched
}

watchEffect(() => menus.value && matchExpanded(menus.value))
</script>

<template>
  <NLayoutSider
    :width="220"
    :native-scrollbar="false"
    :collapsed-width="48"
    collapse-mode="width"
    show-trigger="arrow-circle"
    bordered
  >
    <NMenu
      :value="currentKey"
      :default-expanded-keys="expandedKeys"
      :options="options"
      :root-indent="18"
      @update:value="
        (k) => {
          currentKey = k
        }
      "
    />
  </NLayoutSider>
</template>

<style>
.logo {
  display: block;
  margin: 10px auto;
  max-height: 100px;
  height: 100%;
}
</style>
