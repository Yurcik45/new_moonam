import "./Header.sass";
import { burgerIcon, closeIcon, closeIcon2 } from "../Navigation/navigationIcons";

interface HeaderProps {
  nav: boolean
  setShowNav: (value: boolean) => void
  closeNav:any
}

const personalize = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 2.44444V19.5556C0 20.9 1.08778 22 2.44444 22H19.5556C20.9 22 22 20.9 22 19.5556V2.44444C22 1.1 20.9 0 19.5556 0H2.44444C1.08778 0 0 1.1 0 2.44444ZM14.6667 7.33333C14.6667 9.36222 13.0289 11 11 11C8.97111 11 7.33333 9.36222 7.33333 7.33333C7.33333 5.30444 8.97111 3.66667 11 3.66667C13.0289 3.66667 14.6667 5.30444 14.6667 7.33333ZM3.66667 17.1111C3.66667 14.6667 8.55556 13.3222 11 13.3222C13.4444 13.3222 18.3333 14.6667 18.3333 17.1111V18.3333H3.66667V17.1111Z" fill="black"/>
</svg>

const edit = <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 17.4173V22H4.5827L18.0986 8.4841L13.5159 3.9014L0 17.4173ZM21.6425 4.94015C22.1192 4.46355 22.1192 3.69365 21.6425 3.21705L18.7829 0.35745C18.3063 -0.11915 17.5365 -0.11915 17.0599 0.35745L14.8235 2.59381L19.4062 7.1765L21.6425 4.94015Z" fill="black"/>
</svg>


const Header = (props: HeaderProps) => {

  return (
    <div
      className="Header"
    >
      <div className="header_button_container">
        <div className="header_button">
        <div className="header_button_text underline">Зараз у Вашій стрічці 32 ЗМІ
        </div>
      </div>
        <div className="header_button">
        <div className="header_button_text">Персоналізувати</div>
        <div className="header_button_icon">{personalize}</div>
        {/* <div className="header_button_text">Редагувати</div>
        <div className="header_button_icon">{edit}</div> */}
      </div>
      </div>
      
      <div
        className="burger"
        onClick={() => props.closeNav(!props.nav)}
      >{
        props.nav
        ? closeIcon2
        : burgerIcon
      }</div>
    </div>
  )
}

export default Header;