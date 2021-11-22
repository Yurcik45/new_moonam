import "./Navigation.sass"
import {
  ukraineIcon,
  worldIcon,
  economicsIcon,
  warIcon,
  businessIcon,
} from "./navigationIcons"
import {
  NavigationProps,
  NavigationItems
} from "../../types"

const navigationItems: NavigationItems[] = [
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

const Navigation = (props: NavigationProps) => {
  return (
    <div
      className={props.nav ? "NavigationContainer" : "NavigationContainer none"}
    >
    <div className={props.showNav ? "Navigation" : "Navigation NavigationClose"}>
      <div className="NavigationHeader">
        <div className="navHeaderMain">moonam</div>
        <div className="navHeaderText">Усі новини країни та світу</div>
      </div>
      <div className="NavigationLinks">
      {
        //@ts-ignore
        navigationItems.map((item: {name: string, icon: any, check: boolean}, id: number) => {
          return (
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