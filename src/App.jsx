import { useEffect, useState } from 'react'
import './App.css'
import { Character } from './components/Character'
import { UserInfo } from './components/UserInfo'
import { Header } from './components/Header'
import { UserInteraction } from './components/UserInteraction'

function App() {
  const [characterList, setCharacterList] = useState([
    {
      name: "Dory",
      context: "Procurando Nemo",
      photo: "./src/assets/characters/dory.png",
      colors: ["#1750FA", "#02080F", "#EDF639"],
      hints: ["Continue a nadar!", "Ela esquece as coisas rapidamente.", "Tem uma relação especial de amizade com Nemo."]
    },
    {
      name: "Mickey",
      context: "Mickey Mouse",
      photo: "./src/assets/characters/mickey.png",
      colors: ["#000000", "#FF362E", "#FAC127"],
      hints: ["É um rato.", "Tem um animal de estimação chamado Pluto.", "É um grande amigo do Pateta."]
    },
    {
      name: "Bob Esponja",
      context: "Bob Esponja",
      photo: "./src/assets/characters/bobesponja.png",
      colors: ["#FFFF36", "#FE230E", "#FE230E"],
      hints: ["Gosta de caçar águas-vivas.", "Trabalha no Siri Cascudo.", "É o melhor amigo do Patrick."]
    },
    {
      name: "Shrek",
      context: "Shrek",
      photo: "./src/assets/characters/shrek.png",
      colors: ["#8F9A3B", "#E0D7C5", "#896B46"],
      hints: ["Cresceu em um pântano.", "Casou-se com a princesa Fiona.", "É amigo do Burro e do Gato de Botas."]
    },
    {
      name: "Finn",
      context: "Hora de Aventura",
      photo: "./src/assets/characters/finn.png",
      colors: ["#FFFFFF", "#50A847", "#2B66B3"],
      hints: ["Ama aventuras.", "Usa mochila.", "Seu melhor amigo é um cão mágico com habilidades de alongamento."]
    },
    {
      name: "Rei Gelado",
      context: "Hora de Aventura",
      photo: "./src/assets/characters/reigelado.png",
      colors: ["#FECD00", "#ABDEFE", "#0000FF"],
      hints: ["Busca constantemente por uma princesa para noivar.", "Usa uma coroa e tem poderes mágicos de gelo.", "Tem um penguim de estimação chamado Gunter."]
    },
    {
      name: "Bart",
      context: "Os Simpsons",
      photo: "./src/assets/characters/bart.png",
      colors: ["#FAD835", "#ED4731", "#309ADA"],
      hints: ["Anda de skate.", "Tem o cabelo arrepiado.", "Mora em Springfield."]
    },
    {
      name: "Lisa",
      context: "Os Simpsons",
      photo: "./src/assets/characters/lisa.png",
      colors: ["#FAD835", "#E35437", "#FAD835"],
      hints: ["Toca saxofone.", "É defensora dos animais e do meio ambiente.", "Inteligente e madura demais para sua idade."]
    },
    {
      name: "Rei Julien",
      context: "Madagascar",
      photo: "./src/assets/characters/reijulien.png",
      colors: ["#FDF165", "#493F39", "#A39E93"],
      hints: ["Acredita ser o rei supremo de todos os animais de Madagascar.", "Ele se remexe muito! Afinal, é um dançarino habilidoso.", "Maurice é seu assistente de confiança."]
    }
  ]);

  const [character, setCharacter] = useState({ name: "nenhum1" });
  const [userInput, setUserInput] = useState("nenhum2");

  const [bgColor, setBgColor] = useState("");
  const [lifeAmount, setLifeAmount] = useState(2);
  const [hintAmount, setHintAmount] = useState(3);
  const [points, setPoints] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => { console.log(userInput) }, [userInput])

  useEffect(() => getNewRandomCharacter(), []);

  useEffect(() => {
    if (gameStarted) handleAnswer()

    if (!(lifeAmount > 1)) gameOver()
  }, [userInput]);

  const getNewRandomCharacter = () => {
    const characterIndex = Math.floor(Math.random() * (characterList.length));
    const newRandomCharacter = characterList[characterIndex];
    setCharacter(newRandomCharacter);

    updateCharacterList(newRandomCharacter);
  }

  const updateCharacterList = (characterToRemove) => {
    const indexCharacterToRemove = characterList.indexOf(characterToRemove);
    console.log(indexCharacterToRemove);
    console.log(characterList);
    const newCharacterList = characterList.filter((e, index) => index !== indexCharacterToRemove);
    setCharacterList(newCharacterList);
    console.log(characterList);
  }

  const handleAnswer = () => {
    if (userInput.toLowerCase() == character.name.toLowerCase()) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  const correctAnswer = () => {
    console.log("acertou");
    setPoints(points + 100);
    setBgColor("#77DD77");
    setTimeout(() => setBgColor(""), 2000);
    getNewRandomCharacter();
  }

  const wrongAnswer = () => {
    console.log("errou");
    setBgColor("#FF6961");
    setTimeout(() => setBgColor(""), 2000);
    setLifeAmount(lifeAmount - 1);
  }

  const gameOver = () => {
    setGameEnded(true);
  }

  return (
    <div style={{ backgroundColor: bgColor }} className="App d-flex align-items-center justify-content-center gap-4">
      <Character character={character} />
      <aside className='col-4'>
        <Header />
        <UserInteraction setUserInputGlobal={setUserInput} gameEnded={gameEnded} setGameStarted={setGameStarted} points={points} />
        <UserInfo lifeAmount={lifeAmount} hintAmount={hintAmount} points={points} />
      </aside>
    </div>
  )
}

export default App
