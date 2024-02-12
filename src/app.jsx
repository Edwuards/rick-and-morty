import { useEffect, useState } from 'preact/hooks'
import './app.scss'
import logo from './assets/logo.png'
import { Card } from './card'

export function App() {
  const [cards, setCards] = useState([])
  const getRandomCharacters = () => {
    const request = (ids) => {
      return `https://rickandmortyapi.com/api/character/${ids}`
    }
    const max = 826
    let get = 4
    let ids = []
    while (get) {
      ids.push(Math.floor(Math.random() * max))
      get--
    }

    return fetch(request(ids.join(','))).then((result) => {
      return result.json()
    })
  }

  const displayCards = (characters) => {
    setCards(
      characters.map((data) => {
        return <Card {...data} />
      })
    )
  }

  useEffect(() => {
    getRandomCharacters().then(displayCards)
  }, [])
  return (
    <>
      <div id="home">
        <div id="header">
          <img src={logo} />
        </div>
        <main>{cards}</main>
        <div id="footer">
          <button
            onClick={() => {
              getRandomCharacters().then(displayCards)
            }}
          >
            Actualizar
          </button>
        </div>
      </div>
    </>
  )
}
