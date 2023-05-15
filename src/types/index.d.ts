interface NavigationItem {
  label: string
  icon?: string
  name: string
  params?: { [key: string]: string }
  children?: NavigationItem[]
}
