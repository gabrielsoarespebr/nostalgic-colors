import { useEffect, useState } from 'react'
import './App.css'
import { Character } from './components/Character'
import { UserInfo } from './components/UserInfo'
import { Header } from './components/Header'
import { UserInteraction } from './components/UserInteraction'

function App() {
  const [character, setCharacter] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => { console.log(userInput) }, [userInput])

  const characters = [
    {
      name: "Dory",
      cartoon: "Procurando Nemo",
      photo: "./src/assets/characters/dory.png",
      colors: ["#1750FA", "#02080F", "#EDF639"],
      hints: ["Ela esquece as coisas rapidamente.", "Continue a nadar!", "Tem uma relação especial de amizade e companheirismo com Nemo."]
    },
    {
      name: "Mickey",
      cartoon: "Mickey Mouse",
      photo: "./src/assets/characters/mickey.png",
      colors: ["#000000", "#FF362E", "#FAC127"],
      hints: ["Tem um animal de estimação chamado Pluto.", "É um grande amigo do Pateta.", "Está no mesmo desenho animado que o Pato Donald."]
    },
    {
      name: "Bob Esponja",
      cartoon: "Bob Esponja",
      photo: "./src/assets/characters/bobesponja.png",
      colors: ["#FFFF36", "#FE230E", "#FE230E"],
      hints: ["Gosta de caçar águas-vivas.", "Trabalha no Siri Cascudo.", "É o melhor amigo do Patrick."]
    },
    {
      name: "Shrek",
      cartoon: "Shrek",
      photo: "./src/assets/characters/shrek.png",
      colors: ["#8F9A3B", "#E0D7C5", "#896B46"],
      hints: ["Cresceu em um pântano.", "Casou-se com a princesa Fiona.", "É amigo do Burro e do Gato de Botas."]
    },
    {
      name: "Finn",
      cartoon: "Hora de Aventura",
      photo: "./src/assets/characters/finn.png",
      colors: ["#FFFFFF", "#50A847", "#2B66B3"],
      hints: ["Ama aventuras.", "Usa mochila.", "Seu melhor amigo é um cão mágico com habilidades de alongamento."]
    },
    {
      name: "Rei Gelado",
      cartoon: "Hora de Aventura",
      photo: "./src/assets/characters/reigelado.png",
      colors: ["#FECD00", "#ABDEFE", "#0000FF"],
      hints: ["Busca constantemente por uma princesa para noivar.", "Usa uma coroa e tem poderes mágicos de gelo.", "Tem um penguim de estimação chamado Gunter."]
    },
    {
      name: "Bart",
      cartoon: "Os Simpsons",
      photo: "./src/assets/characters/bart.png",
      colors: ["#FAD835", "#ED4731", "#309ADA"],
      hints: ["Anda de skate.", "Tem o cabelo arrepiado.", "Mora em Springfield."]
    },
    {
      name: "Lisa",
      cartoon: "Os Simpsons",
      photo: "./src/assets/characters/lisa.png",
      colors: ["#FAD835", "#E35437", "#FAD835"],
      hints: ["Toca saxofone.", "É defensora dos animais e do meio ambiente.", "Inteligente e madura demais para sua idade."]
    }
  ];

  useEffect(() => {
    const characterIndex = Math.floor(Math.random() * (characters.length));
    setCharacter(characters[characterIndex]);
  }, []);

  return (
    <div className="App d-flex align-items-center justify-content-center gap-4">
      <Character character={character} />
      <aside className='col-4'>
        <Header />
        <UserInteraction setUserInputGlobal={setUserInput} />
        <UserInfo />
      </aside>
    </div>
  )
}

export default App
