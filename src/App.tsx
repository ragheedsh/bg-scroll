import React, { useMemo, useState } from "react"
import { MenuItemType } from "./types"

const MenuItem = ({ icon, title, subMenu }: MenuItemType) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="menu-item">
      <div onClick={handleClick}>
        {icon && <span>{icon} - </span>}
        {title}
      </div>
      {isOpen && subMenu && (
        <div style={{ marginLeft: "20px" }}>
          {subMenu.map((subItem, index) => (
            <MenuItem subMenu={[]} key={index} {...subItem} />
          ))}
        </div>
      )}
    </div>
  )
}

const App = () => {
  const menuItems: MenuItemType[] = useMemo(
    () => [
      {
        icon: "🍔",
        title: "Burger",
        subMenu: [
          {
            icon: "🍟",
            title: "Fries",
          },
          {
            icon: "🥤",
            title: "Drink",
          },
        ],
      },
      {
        icon: "🍕",
        title: "Pizza",
        subMenu: [
          {
            icon: "🥗",
            title: "Salad",
          },
        ],
      },
    ],
    []
  )

  return (
    <div className="app">
      <div className="menu">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default App
