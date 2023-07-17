<script setup lang="ts">
import useNavigation from '@/composables/navigation'

// import { useAuthStore } from '@/stores/auth'

const { router } = useNavigation()
// const authStore = useAuthStore()

const state = reactive({
  loading: false,
  error: false,
  username: '',
  password: '',
})

async function login() {
  try {
    if (state.username && state.password) {
      // TODO
      // const { username, password } = state
      // state.loading = true

      // const [error, data] = await authService.login({
      //   username,
      //   password,
      // })

      // if (error) {
      //   state.error = true
      //   return
      // }

      // const {
      //   data: { user: authInfo, accessToken, refreshToken },
      // } = data
      // await authStore.setAuth(authInfo, accessToken, refreshToken)

      router.push({ name: 'main.home' })
    }
    else {
      state.error = true
    }
  }
  catch (error) {
  }
  finally {
    state.loading = false
  }
}

onMounted(() => {
  ;(document.querySelector('#email') as HTMLInputElement)?.focus()

  Object.assign(state, {
    loading: false,
    error: false,
    email: '',
    password: '',
  })
})

defineExpose({
  state,
  login,
})
</script>

<template>
  <div class="login-container">
    <n-card embedded>
      <n-form @submit.prevent="login()">
        <n-space vertical>
          <n-form-item label="Email" :show-feedback="false">
            <n-input
              v-model:value="state.username"
              placeholder=""
              :input-props="{
                autocomplete: 'username',
                id: 'email',
              }"
            />
          </n-form-item>
          <n-form-item label="Password" :show-feedback="false">
            <n-input
              v-model:value="state.password"
              type="password"
              placeholder=""
              :input-props="{
                autocomplete: 'current-password',
                id: 'password',
              }"
            />
          </n-form-item>

          <n-button id="login-button" type="primary" attr-type="submit" :loading="state.loading">
            Login
          </n-button>
        </n-space>
      </n-form>
    </n-card>
  </div>
</template>

<style lang="scss">
.login-container {
  margin: 0 auto;
  margin-top: 20vh;
  max-width: 500px;

  .n-form-item-label__text {
    color: #898989;
  }
}
</style>
