import { useState } from "react"
import "./Navigation.sass"
import {
  ukraineIcon,
  worldIcon,
  economicsIcon,
  warIcon,
  businessIcon,
  closeIcon
} from "./navigationIcons"

interface NavProps {
  nav: boolean
  showNav: boolean
  setShowNav: (value: boolean) => void
  closeNav: any
  categories: any
}

const navigationItems = [
  {
    name: "Україна",
    icon: ukraineIcon,
    path: ""
  },
  {
    name: "Світ",
    icon: worldIcon,
    path: ""
  },
  {
    name: "Економіка",
    icon: economicsIcon,
    path: ""
  },
  {
    name: "Війна",
    icon: warIcon,
    path: ""
  },
  {
    name: "Бізнес",
    icon: businessIcon,
    path: ""
  },
]

const Navigation = (props: NavProps) => {
  return (
    <div
      className={props.nav ? "NavigationContainer" : "NavigationContainer none"}
    >
    <div className={props.showNav ? "Navigation" : "Navigation NavigationClose"}>
      {/* <div
        className="navclose"
        onClick={() => props.closeNav(false)}
      >
        {closeIcon}
      </div> */}
      <div className="NavigationHeader">
        <div className="navHeaderMain">moonam</div>
        <div className="navHeaderText">Усі новини країни та світу</div>
      </div>
      <div className="NavigationLinks">
      {
        //@ts-ignore
        navigationItems.map((item, id) => {
          return (
          <>
          {
            props.categories[id].check &&
            <div
              key={id}
              className="NavigationItem"
            >
              <div className="navItemIcon">
                {item.icon}
              </div>
              <div className="navItemText">
                {item.name}
              </div>
            </div>
          }
          </>
          )
        })
      }
      </div>
      <div className="NavigationManifest">
        Маніфест moonam
      </div>
    </div>
    </div>
  )
}

export default Navigation;