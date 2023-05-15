import { useRoute, useRouter } from 'vue-router'

function useNavigation() {
  const route = useRoute()
  const router = useRouter()
  const refreshRoute = () => router.replace({ path: `/redirect${route.path}` })

  return {
    refreshRoute,
  }
}

export default useNavigation
