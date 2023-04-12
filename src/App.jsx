import { useState } from 'react'
import './App.css'
import { Character } from './components/Character'
import { UserInfo } from './components/UserInfo'
import { Header } from './components/Header'

function App() {
  const [characterPhoto, setCharacterPhoto] = useState("https://lh4.googleusercontent.com/9wIgDXGkdGH7xEvUj7EJ-FenrUFeh8P6hbsTDWDAbVVGGCqmCZkXOpINqR0tknqsfEZBVpOFYdkKoMFA5MVNxQyduSKcKJi9gIDTArBpPObpDzoiKT0e2BvdbFopgR14JjZ3xaRe")

  const characters = [
    {
      name: "Mickey",
      photo: "./src/assets/characters/mickey.png",
      colors: ["#000000", "#FF362E", "#FAC127"],
      hints: ["Seu animal de estimação é o cachorro Pluto.", "É um grande amigo do Pateta.", "Está no mesmo desenho animado que o Pato Donald."]
    },
    {
      name: "Bob Esponja",
      photo: "./src/assets/characters/bobesponja.png",
      colors: ["#FFFF36", "#FE230E", "#FE230E"],
      hints: ["Gosta de caçar águas-vivas.", "Trabalha no Siri Cascudo.", "É o melhor amigo do Patrick."]
    }
  ]

  return (
    <div className="App d-flex align-items-center justify-content-center gap-4">
      <Character characterPhoto={characterPhoto} />
      <aside className='col-4'>
        <Header />
        {/* Logo */}
        {/* UserAction */}
        <UserInfo />
      </aside>
    </div>
  )
}

export default App
