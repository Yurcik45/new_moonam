import { useEffect, useState, useReducer } from "react";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import "./Home.sass";
import dog from "../../images/news/dog.png"
import {
  NewsPopupDataTypes,
  Сategories,
  HomeProps
} from "../../types"

const Home = (props: HomeProps) => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalType, setModalType] = useState<string>("")
  const [personalaze, setPersonalaze] = useState(true)
  const [, forceUpdate] = useReducer(x => x + 1, 0)


  const [categories, setCategories] = useState<Сategories[]>([
    {
      name: "Україна",
      check: true
    },
    {
      name: "Світ",
      check: true
    },
    {
      name: "Економіка",
      check: true
    },
    {
        name: "Війна",
        check: true
    },
    {
        name: "Бізнес",
        check: true
    },
  ])
  const [chanels, setChanels] = useState<Сategories[]>([
    {
      name: "5 Канал",
      check: true
    },
    {
      name: "Тсн",
      check: true
    },
    {
      name: "Еспресо",
      check: true
    },
    {
      name: "Українська правда",
      check: true
    },
    {
      name: "UBR",
      check: true
    },
    {
      name: "Громадське",
      check: true
    },
    {
      name: "24 Канал",
      check: true
    },
    {
      name: "24 Канал",
      check: true
    },
    {
      name: "24 Канал",
      check: true
    },
    {
      name: "24 Канал",
      check: true
    },
    {
      name: "24 Канал",
      check: true
    },
    {
      name: "24 Канал",
      check: true
    }
  ])

  const [newsPopup, setNewsPopup] = useState<NewsPopupDataTypes>({
    image: "",
    source: "",
    title: "",
    date: "",
    text: "",
    quotation: ""
  })

  const [newsData, setNewsData] = useState([
    {
      // image: "https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:720/p:16x9/news_1920x1080.png",
      image: dog,
      title: "У Рівному відкрили меморіал загиблим під час Революції Гідності та російсько-української війни ",
      source: "http://surl.li/aqcxb",
      chanel: "Прямий",
      date: "date",
      text: "Сотні містян приходять сюди, аби вшанувати пам’ять полеглих Героїв молитвою. Ідея встановлення меморіалу  виникла у сімей загиблих військових. Вони прагнули увіковічнити пам'ять про своїх рідних, які віддали життя за Україну. До реалізації проєкту долучилися представники Православної церкви України, волонтери та військовослужбовці. Зверталися по допомогу і до міської ради. Інсталяцію виготовили та встановили коштом мецената.",
      quotation: '"Він для мене був дуже важливим, тому що це як ти хочеш зробити, а воно не виходить, бо ти його хочеш зробити якнайкраще. Тому я вважаю, той мінімум який ми могли зробить і сьогодні ми хочемо зібрати сім’ї загиблих і нашу Рівненщину і приїхати просто помолитись. Я думаю, це має бути в кожному обласному центрі, тому що саме вони віддали життя за Україну, а ми маємо віддавати їм шану", – зазначив секретар Рівненської міськради Віктор Шакирзян. '
    },
    {
      // image: "https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:720/p:16x9/news_1920x1080.png",
      image: dog,
      title: "У Рівному відкрили меморіал загиблим під час Революції Гідності та російсько-української війни ",
      source: "http://surl.li/aqcxb",
      chanel: "Прямий",
      date: "date",
      text: "Сотні містян приходять сюди, аби вшанувати пам’ять полеглих Героїв молитвою. Ідея встановлення меморіалу  виникла у сімей загиблих військових. Вони прагнули увіковічнити пам'ять про своїх рідних, які віддали життя за Україну. До реалізації проєкту долучилися представники Православної церкви України, волонтери та військовослужбовці. Зверталися по допомогу і до міської ради. Інсталяцію виготовили та встановили коштом мецената.",
      quotation: '"Він для мене був дуже важливим, тому що це як ти хочеш зробити, а воно не виходить, бо ти його хочеш зробити якнайкраще. Тому я вважаю, той мінімум який ми могли зробить і сьогодні ми хочемо зібрати сім’ї загиблих і нашу Рівненщину і приїхати просто помолитись. Я думаю, це має бути в кожному обласному центрі, тому що саме вони віддали життя за Україну, а ми маємо віддавати їм шану", – зазначив секретар Рівненської міськради Віктор Шакирзян. '
    },
    {
      // image: "https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:720/p:16x9/news_1920x1080.png",
      image: dog,
      title: "У Рівному відкрили меморіал загиблим під час Революції Гідності та російсько-української війни ",
      source: "http://surl.li/aqcxb",
      chanel: "Прямий",
      date: "date",
      text: "Сотні містян приходять сюди, аби вшанувати пам’ять полеглих Героїв молитвою. Ідея встановлення меморіалу  виникла у сімей загиблих військових. Вони прагнули увіковічнити пам'ять про своїх рідних, які віддали життя за Україну. До реалізації проєкту долучилися представники Православної церкви України, волонтери та військовослужбовці. Зверталися по допомогу і до міської ради. Інсталяцію виготовили та встановили коштом мецената.",
      quotation: '"Він для мене був дуже важливим, тому що це як ти хочеш зробити, а воно не виходить, бо ти його хочеш зробити якнайкраще. Тому я вважаю, той мінімум який ми могли зробить і сьогодні ми хочемо зібрати сім’ї загиблих і нашу Рівненщину і приїхати просто помолитись. Я думаю, це має бути в кожному обласному центрі, тому що саме вони віддали життя за Україну, а ми маємо віддавати їм шану", – зазначив секретар Рівненської міськради Віктор Шакирзян. '
    },
    {
      // image: "https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:720/p:16x9/news_1920x1080.png",
      image: dog,
      title: "У Рівному відкрили меморіал загиблим під час Революції Гідності та російсько-української війни ",
      source: "http://surl.li/aqcxb",
      chanel: "Прямий",
      date: "date",
      text: "Сотні містян приходять сюди, аби вшанувати пам’ять полеглих Героїв молитвою. Ідея встановлення меморіалу  виникла у сімей загиблих військових. Вони прагнули увіковічнити пам'ять про своїх рідних, які віддали життя за Україну. До реалізації проєкту долучилися представники Православної церкви України, волонтери та військовослужбовці. Зверталися по допомогу і до міської ради. Інсталяцію виготовили та встановили коштом мецената.",
      quotation: '"Він для мене був дуже важливим, тому що це як ти хочеш зробити, а воно не виходить, бо ти його хочеш зробити якнайкраще. Тому я вважаю, той мінімум який ми могли зробить і сьогодні ми хочемо зібрати сім’ї загиблих і нашу Рівненщину і приїхати просто помолитись. Я думаю, це має бути в кожному обласному центрі, тому що саме вони віддали життя за Україну, а ми маємо віддавати їм шану", – зазначив секретар Рівненської міськради Віктор Шакирзян. '
    },
  ])

  useEffect(() => {
    //@ts-ignore
    const storageCategories = JSON.parse(localStorage.getItem("Categories"))
    //@ts-ignore
    const storageChanels = JSON.parse(localStorage.getItem("Chanels"))
    const different = () => {
      if (storageCategories !== null) {
        for (let i = 0; i < storageCategories.length; i++) {
          if (storageCategories[i].check !== categories[i].check) {
            setPersonalaze(false)
            break
          }
        }
      }
      if (storageChanels !== null) {
        for (let i = 0; i < storageChanels.length; i++) {
          if (storageChanels[i].check !== chanels[i].check) {
            setPersonalaze(false)
            break
          }
        }
      }
    }
    if (storageCategories === null) {
      setCategories(categories)
      setPersonalaze(true)
    } else {
      setCategories(storageCategories)
    }
    if (storageChanels === null) {
      setChanels(chanels)
      setPersonalaze(true)
    } else {
      setChanels(storageChanels)
    }
    different()
    forceUpdate()
  }, [])

  return (
    <div className="Home">
      <Navigation
        nav={props.nav}
        showNav={props.showNav}
        categories={categories}
      />

      <Header
        setShowModal={setShowModal}
        nav={props.nav}
        closeNav={props.closeNav}
        setModalType={setModalType}
        personalaze={personalaze}
      />

      <NewsContainer
        newsData={newsData}
        setNewsData={setNewsData}
        newsPopup={newsPopup}
        setModalType={setModalType}
        setShowModal={setShowModal}
        setNewsPopup={setNewsPopup}
      />
      {
        showModal &&
          <Modal
            newsPopup={newsPopup}
            categories={categories}
            chanels={chanels}
            type={modalType} // categories or news
            setShowModal={setShowModal}
          />
      }
    </div>
  )
}

export default Home;

// useEffect(() => {

//   window.scrollTo(0, 0)

//   const pageHeight = window.innerHeight;
//   let scrollCounter = 0

//   const scrollHeight = window.document.body.scrollHeight
//   document.addEventListener('wheel', function(e) {
//     if(
//       e.deltaY > 0 &&
//       scrollCounter < (scrollHeight - pageHeight)
//     ) {
//         scrollCounter = scrollCounter + pageHeight
//         window.scrollTo(0, scrollCounter)
//     }
//     if (
//       e.deltaY < 0 &&
//       scrollCounter > 0
//     ){
//         scrollCounter = scrollCounter - pageHeight
//         window.scrollTo(0, scrollCounter)
//     }
//    }
//   );

// }, [])