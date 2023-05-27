<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import useNavigation from '@/composables/navigation'
import { Icon } from '@/components/shared'

const { router, refreshRoute } = useNavigation()

const message = useMessage()
const me = ref({
  name: 'Admin',
  avatar: 'https://avatars.dicebear.com/api/avataaars/xaw.svg',
})

const options = computed(() => [
  { key: 'me', label: `Hey, ${me.value?.name as string}!` },
  { key: 'divider', type: 'divider' },
  {
    key: 'profile',
    label: 'Your Profiles',
  },
  { key: 'divider', type: 'divider' },
  { key: 'logout', label: 'Sign out' },
])

async function handleOptionsSelect(key: unknown): Promise<void> {
  if ((key as string) === 'logout')
    await router.push({ name: 'login' })
  else if ((key as string) === 'me')
    message.success(`Welcome back, ${me.value?.name as string}!`)
}
</script>

<template>
  <NLayoutHeader bordered>
    <NButton text @click="refreshRoute">
      <Icon type="refresh" size="20" :depth="2" />
    </NButton>
    <NSpace :size="20" align="center" style="line-height: 1">
      <NTooltip>
        <template #trigger>
          <RouterLink :to="{ name: 'main.about' }">
            <Icon type="help" size="22" :depth="2" />
          </RouterLink>
        </template>
        Dashboard help
      </NTooltip>
      <NPopover trigger="click" placement="bottom-end" :width="300">
        <template #trigger>
          <NBadge dot processing>
            <Icon type="notifications" size="22" :depth="2" />
          </NBadge>
        </template>
        <NTabs type="line" justify-content="space-evenly" style="--pane-padding: 0">
          <NTabPane name="notifications" tab="Notifications (5)">
            <NList style="margin: 0">
              <NListItem v-for="i in 5" :key="i">
                Notification {{ i }}
              </NListItem>
            </NList>
          </NTabPane>
          <NTabPane name="messages" tab="Messages (6)">
            <NList style="margin: 0">
              <NListItem v-for="i in 6" :key="i">
                Message {{ i }}
              </NListItem>
            </NList>
          </NTabPane>
        </NTabs>
      </NPopover>
      <NDropdown placement="bottom-end" show-arrow :options="options" @select="handleOptionsSelect">
        <NAvatar size="small" round :src="me?.avatar" />
      </NDropdown>
    </NSpace>
  </NLayoutHeader>
</template>

<style scoped>
.n-layout-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 9px 18px;
}

.n-button {
  margin-right: 15px;
}

.n-space {
  margin-left: auto;
}
</style>
