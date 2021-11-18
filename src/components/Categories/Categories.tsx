import "./Categories.sass"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import { useState, useReducer } from "react";
// import checkIcon from "../../images/modal/check.webp"

interface CategoriesProps {
  categories: {
    [id: number]: {
        name: string
        check: boolean
    }
  }
  chanels: {
    [id: number]: {
        name: string
        check: boolean
    }
  }
  setShowModal: any
}

const Categories = (props: CategoriesProps) => {

  const [, forceUpdate] = useReducer(x => x + 1, 0)

  const [showCategories, setShowCategories] = useState<boolean>(true)
  const [showChanels, setshowChanels] = useState<boolean>(false)
  const [showFinish, setShowFinish] = useState<boolean>(false)

  const checkIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="23.58" height="23.58" rx="4" fill="#0602CA"/>
  <path d="M10.3091 18.5912C10.1402 18.7661 9.90994 18.8638 9.67065 18.8638C9.43136 18.8638 9.20109 18.7661 9.03224 18.5912L3.93397 13.3377C3.40482 12.7925 3.40482 11.9087 3.93397 11.3644L4.57238 10.7067C5.10153 10.1615 5.95847 10.1615 6.48762 10.7067L9.67065 13.9861L18.2716 5.1247C18.8007 4.57953 19.6586 4.57953 20.1868 5.1247L20.8252 5.78244C21.3544 6.32762 21.3544 7.21143 20.8252 7.75568L10.3091 18.5912Z" fill="white"/>
  </svg>

  const unCheckIkon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H19.58C21.513 0.5 23.08 2.067 23.08 4V19.58C23.08 21.513 21.513 23.08 19.58 23.08H4C2.067 23.08 0.5 21.513 0.5 19.58V4Z" stroke="#B5B5B5"/>
  </svg>

  const closeIcon = <svg width="30" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.5176 15L24.208 5.83301C24.3369 5.68066 24.2285 5.44922 24.0293 5.44922H21.6914C21.5537 5.44922 21.4219 5.51074 21.331 5.61621L14.9883 13.1777L8.6455 5.61621C8.55761 5.51074 8.42577 5.44922 8.28515 5.44922H5.94726C5.74804 5.44922 5.63964 5.68066 5.76855 5.83301L13.459 15L5.76855 24.167C5.73967 24.2009 5.72114 24.2425 5.71517 24.2867C5.70919 24.3308 5.71602 24.3758 5.73483 24.4162C5.75365 24.4566 5.78367 24.4908 5.82132 24.5146C5.85897 24.5385 5.90268 24.551 5.94726 24.5508H8.28515C8.42284 24.5508 8.55468 24.4893 8.6455 24.3838L14.9883 16.8223L21.331 24.3838C21.4189 24.4893 21.5508 24.5508 21.6914 24.5508H24.0293C24.2285 24.5508 24.3369 24.3193 24.208 24.167L16.5176 15Z" fill="black"/>
  </svg>
  
  const finishCheckIcon = <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="25.5" cy="25.5" r="25.5" fill="#0602CA"/>
  <path d="M23.0027 36.5572C22.747 36.8252 22.3984 36.9748 22.0361 36.9748C21.6739 36.9748 21.3252 36.8252 21.0696 36.5572L13.3508 28.5086C12.5497 27.6734 12.5497 26.3194 13.3508 25.4856L14.3174 24.4779C15.1185 23.6427 16.4159 23.6427 17.2171 24.4779L22.0361 29.502L35.0579 15.9262C35.8591 15.091 37.1578 15.091 37.9576 15.9262L38.9242 16.9339C39.7253 17.7691 39.7253 19.1231 38.9242 19.9569L23.0027 36.5572Z" fill="white"/>
  </svg>  
  
  const clickNext = () => {
    setShowCategories(false)
    setTimeout(() => {
      setshowChanels(true)
    }, 400)
  }
  const clickBack = () => {
    setshowChanels(false)
    setTimeout(() => {
      setShowCategories(true)
    }, 400)
  }
  const clickFinish = () => {
    setShowCategories(false)
    setshowChanels(false)
    setTimeout(() => {
      setShowFinish(true)
      setTimeout(() => {
        props.setShowModal(false)
      }, 1000)
    }, 400)
  }
  const clickClose = () => {
    setTimeout(() => {
      setShowCategories(false)
      setshowChanels(false)
      setShowFinish(false)
      setTimeout(() => {
        props.setShowModal(false)
      }, 600)
    }, 400)
  }

  const categoryHandler = (id: number, item_check: boolean): void => {
    props.categories[id].check = !item_check
    localStorage.setItem("Categories", JSON.stringify(props.categories))
    forceUpdate()
  }

  const chanelHandler = (id: number, item_check: boolean): void => {
    props.chanels[id].check = !item_check
    localStorage.setItem("Chanels", JSON.stringify(props.chanels))
    forceUpdate()
  }
    
  return (
    <>
      <div
        className={
          showCategories
          ? "settings_category_container index"
          : "settings_category_container get_opacity"
        }
        style={{transform: !showCategories
          ? "perspective(600px) translate(0px, -100%) rotateX(45deg)"
          : "perspective(600px) translate(0px, 0%) rotateX(0deg)",
        }}
      >
        <div
            className="category_close"
            onClick={clickClose}
        >
            {closeIcon}
        </div>
        <div
            className="category_title">
            Виберіть категорії
        </div>
        <div className="category_items_block">
          {
            //@ts-ignore
            props.categories.map((item: any, id: number) => {
              return (
                <div                                        className="category_item"
                    onClick={() => categoryHandler(id, item.check)}
                    key={id}
                >
                  <div
                      className="item_name">
                      {item.name}
                  </div>
                    <div 
                      className={
                      item.check
                          ? "item_check check_true"
                          : "item_check"
                    }>
                        {
                          item.check
                          ? checkIcon
                          : unCheckIkon
                        }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div
          className="category_button_block"
          onClick={() => clickNext()}
        >
          <div className="category_button">
             Далі
          </div>
        </div>
      </div>
  
      <div
        className={
          showChanels
          ? "settings_mass_media_container index"
          : "settings_mass_media_container get_opacity"
        }
        style={{transform: !showChanels
          ? "perspective(600px) translate(0px, -100%) rotateX(45deg)"
          : "perspective(600px) translate(0px, 0%) rotateX(0deg)",
        }}
      >
        <div
            className="category_close"
            onClick={clickClose}
        >{ closeIcon }</div>
        <div className="category_title">Виберіть ЗМІ</div>
        <div className="category_items_block">
          {
            props.chanels &&
              
            //@ts-ignore
            props.chanels.map((item, id: number) => {
              console.log("chanels map", item);
              
              return (
                <div
                  className="category_item"
                  onClick={() => chanelHandler(id, item.check)}
                  key={id}
                >
                  <div className="item_name">
                      {item.name}
                  </div>
                  <div className={
                    item.check
                        ? "item_check check_true"
                        : "item_check"
                  }>
                    {
                      item.check
                      ? checkIcon
                      : unCheckIkon
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="category_button_block">
          <div
            className="back_button"
            onClick={clickBack}
          >Назад</div>
          <div
            className="category_button"
            onClick={clickFinish}
          >Завершити</div>
        </div>
      </div>

      <ClickAwayListener
        onClickAway={
          showFinish
          ? () => clickClose()
          : () => console.log("fff")
        }
      >
        <div
          className={
            showFinish
            ? "settings_finish_container index"
            : "settings_finish_container get_opacity"
          }
          style={{transform: true
              ? "perspective(600px) translate(0%, 0px) rotateY(0deg)"
              : "perspective(600px) translate(-100%, 0px) rotateY(-45deg)",
          }}
        >
          <div className="finish_title">
            <div className="title_text">Персоналізовано</div>
            <div className="title_check">{finishCheckIcon}</div>
          </div>
          <div className="finish_subtitle">
            Можна редагувати у будь-який момент
          </div>
        </div>
      </ClickAwayListener>
  </>
  )
}

export default Categories;