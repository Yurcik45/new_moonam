import "./Navigation.sass"
import {
  ukraineIcon,
  worldIcon,
  economicsIcon,
  warIcon,
  businessIcon
} from "./navigationIcons"

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

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="NavigationHeader">
        <div className="navHeaderMain">moonam</div>
        <div className="navHeaderText">Усі новини країни та світу</div>
      </div>
      <div className="NavigationLinks">
      {
        //@ts-ignore
        navigationItems.map((item, id) => {
          return (
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
  )
}

export default Navigation;