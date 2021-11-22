import React from "react"
export interface Сategories {
  name: string
  check: boolean
}

export interface NavigationItems {
  name: string,
  // icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  icon: any
  path: string
}

export interface NewsPopupDataTypes {
  image: any
  source: string
  title: string
  date: string
  text: string
  quotation: string
}

export interface NewsDataTypes {
  image: string
  title: string
  date: string
  text: string
  source: string
  chanel: string
  quotation: string
}

interface GlobalProps {
  nav: boolean
  showNav: boolean
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
  closeNav: (status: boolean) => void
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
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setModalType: React.Dispatch<React.SetStateAction<string>>
  personalaze: boolean
  setNewsPopup: React.Dispatch<React.SetStateAction<NewsPopupDataTypes>>
  newsPopup: NewsPopupDataTypes
  newsData: NewsDataTypes[]
  newsDataItem: NewsDataTypes
  setNewsData: React.Dispatch<React.SetStateAction<NewsDataTypes[]>>
  type: string
  openNews: (
    image: NewsPopupDataTypes["image"],
    title: NewsPopupDataTypes["title"],
    source: NewsPopupDataTypes["source"],
    date: NewsPopupDataTypes["date"],
    text: NewsPopupDataTypes["text"],
    quotation: NewsPopupDataTypes["quotation"]
  ) => void
}

export interface HomeProps {
  nav: GlobalProps["nav"]
  showNav: GlobalProps["showNav"]
  setShowNav: GlobalProps["setShowNav"]
  closeNav: GlobalProps["closeNav"]
}

export interface NavigationProps {
  nav: GlobalProps["nav"]
  showNav: GlobalProps["showNav"]
  categories: GlobalProps["categories"]
}

export interface HeaderProps {
  setShowModal: GlobalProps["setShowModal"]
  nav: GlobalProps["nav"]
  closeNav: GlobalProps["closeNav"]
  setModalType: GlobalProps["setModalType"]
  personalaze: GlobalProps["personalaze"]
}

export interface NewsContainerProps {
  newsData: GlobalProps["newsData"]
  setNewsData: GlobalProps["setNewsData"]
  newsPopup: GlobalProps["newsPopup"]
  setModalType: GlobalProps["setModalType"]
  setShowModal: GlobalProps["setShowModal"]
  setNewsPopup: GlobalProps["setNewsPopup"]
}

export interface ModalProps {
  newsPopup: GlobalProps["newsPopup"]
  categories: GlobalProps["categories"]
  chanels: GlobalProps["chanels"]
  type: GlobalProps["type"]
  setShowModal: GlobalProps["setShowModal"]
}

export interface NewsProps {
  newsDataItem: GlobalProps["newsDataItem"]
  openNews: GlobalProps["openNews"]
}

export interface CategoriesProps {
  setShowModal: GlobalProps["setShowModal"]
  categories: GlobalProps["categories"]
  chanels: GlobalProps["chanels"]
}
export interface SelectNewsProps {
  setShowModal: GlobalProps["setShowModal"]
  newsPopup: GlobalProps["newsPopup"]
}