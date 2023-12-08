export interface MenuItemType {
  icon: string
  title: string
  subMenu?: Omit<MenuItemType, "subMenu">[]
}
