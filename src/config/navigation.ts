export interface NavigationItem {
  label: string
  icon?: string
  name: string
  params?: { [key: string]: string }
  children?: NavigationItem[]
}

const commonNavigations: NavigationItem[] = [
  {
    label: 'Home',
    name: 'main.home',
  },
  {
    label: 'About',
    name: 'main.about',
  },
]

export const navigation: NavigationItem[] = [...commonNavigations]
