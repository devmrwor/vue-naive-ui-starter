import { useRoute, useRouter } from 'vue-router'

function useNavigation() {
  const route = useRoute()
  const router = useRouter()

  const refreshRoute = () => {
    if (route.path === '/')
      return router.go(0)

    router.replace({ path: `/redirect${route.path}` })
  }

  return {
    route,
    router,
    refreshRoute,
  }
}

export default useNavigation
