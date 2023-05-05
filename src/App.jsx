import { useEffect, useState } from 'react'
import './App.css'
import { Character } from './components/Character'
import { UserInfo } from './components/UserInfo'
import { Header } from './components/Header'
import { UserInteraction } from './components/UserInteraction'

import soundCorrectAnswer from '../src/assets/audios/effects/correctAnswer.wav'
import soundWrongAnswer from '../src/assets/audios/effects/wrongAnswer.wav'
import soundSkipQuestion from '../src/assets/audios/effects/skip.wav'
import soundAskForAHint from '../src/assets/audios/effects/hint.wav'
import soundGameOver from '../src/assets/audios/effects/gameOver.wav'

function App() {
  const [characterList, setCharacterList] = useState([
    {
      name: "Sid",
      context: "A Era do Gelo",
      photo: "/src/assets/characters/sid.png",
      colors: ["#C5AC72", "#F0E6C1", "#9C4C6F"],
      hints: ["É um bicho-preguiça que fala demais.", "Seu nome tem apenas 3 letras.", "É muito desastrado e às vezes causa acidentes sem querer."]
    },
    {
      name: "Musculoso",
      context: "Apenas um Show",
      photo: "/src/assets/characters/musculoso.png",
      colors: ["#A7CF86", "#7197AA", "#5E671A"],
      hints: ["Frequentemente faz piadas sujas e se comporta de maneira inapropriada.", "Conhecido por tirar sua própria camisa e girar.", "Muito competitivo, principalmente quando se trata de brigas e pegadinhas."]
    },
    {
      name: "Pairulito",
      context: "Apenas um Show",
      photo: "/src/assets/characters/pairulito.png",
      colors: ["#FFE8E9", "#4E4E4E", "#8B8B8B"],
      hints: ["Sua cabeça é gigante em relação ao seu corpo.", "É muito sensível, emocional e pacífico. Por isso, não gosta de conflitos ou violência.", "Sua ingenuidade faz com que ele seja enganado pelos outros personagens."]
    },
    {
      name: "Bob Esponja",
      context: "Bob Esponja",
      photo: "/src/assets/characters/bobesponja.png",
      colors: ["#FFFF36", "#FE230E", "#FE230E"],
      hints: ["Gosta de caçar águas-vivas com seu melhor amigo.", "Trabalha na cozinha do Siri Cascudo, fazendo hamburgueres de siri.", "Mora na Fenda do Biquini e sua casa é um abacaxi."]
    },
    {
      name: "Lula Molusco",
      context: "Bob Esponja",
      photo: "/src/assets/characters/lulamolusco.png",
      colors: ["#ADD1C5", "#DC8F19", "#7894C8"],
      hints: ["Seus hobbies são pintar quadros e tocar clarinete.", "Tem personalidade arrogante e frequentemente zomba dos outros personagens.", "É um polvo, apesar de seu nome sugerir que é uma lula."]
    },
    {
      name: "Kuririn",
      context: "Dragon Ball",
      photo: "/src/assets/characters/kuririn.png",
      colors: ["#FFCDB5", "#E94800", "#070602"],
      hints: ["Baixinho e careca quando se trata de aparência. Justo e leal quando se trata de personalidade.", "Seu nome tem 7 letras e começa com K.", "É um lutador habilidoso e rápido, que já participou de muitos torneios de artes marciais."]
    },
    {
      name: "Finn",
      context: "Hora de Aventura",
      photo: "/src/assets/characters/finn.png",
      colors: ["#FFFFFF", "#50A847", "#2B66B3"],
      hints: ["Em seu nome, a letra N aparece duas vezes.", "Tem muita coragem e ama aventuras.", "Seu melhor amigo é um cão mágico com habilidades de alongamento."]
    },
    {
      name: "Rei Gelado",
      context: "Hora de Aventura",
      photo: "/src/assets/characters/reigelado.png",
      colors: ["#FECD00", "#ABDEFE", "#0000FF"],
      hints: ["No aspecto amoroso, é bastante carente, e está sempre em busca de uma princesa para noivar.", "Usa uma coroa com poderes mágicos de gelo.", "Tem um penguim de estimação chamado Gunter."]
    },
    {
      name: "Rei Julien",
      context: "Madagascar",
      photo: "/src/assets/characters/reijulien.png",
      colors: ["#FDF165", "#493F39", "#A39E93"],
      hints: ["Acredita ser o rei supremo de todos os animais de Madagascar.", "Ele se remexe muito! Afinal, é um dançarino habilidoso.", "Maurice é seu assistente de confiança."]
    },
    {
      name: "Mickey",
      context: "Mickey Mouse",
      photo: "/src/assets/characters/mickey.png",
      colors: ["#000000", "#FF362E", "#FAC127"],
      hints: ["Ele é um camundongo que se tornou símbolo da Disney.", "Seu nome tem 6 letras ao total, dentre elas as letras K e Y.", "Tem personalidade romântica, bondosa e prestativa."]
    },
    {
      name: "Cosmo",
      context: "Os Padrinhos Mágicos",
      photo: "/src/assets/characters/cosmo.png",
      colors: ["#FAC1A3", "#7BB850", "#F8D53B"],
      hints: ["Usa uma coroa e uma varinha mágica.", "Consegue voar devido às suas asas.", "Seu propósito de vida é proteger Timmy Turner."]
    },
    {
      name: "Bart",
      context: "Os Simpsons",
      photo: "/src/assets/characters/bart.png",
      colors: ["#FAD835", "#ED4731", "#309ADA"],
      hints: ["Anda de skate.", "Tem o cabelo arrepiado.", "Mora em Springfield."]
    },
    {
      name: "Lisa",
      context: "Os Simpsons",
      photo: "/src/assets/characters/lisa.png",
      colors: ["#FAD835", "#E35437", "#FAD835"],
      hints: ["Toca saxofone.", "É defensora dos animais e do meio ambiente.", "Inteligente e madura demais para sua idade."]
    },
    {
      name: "Dory",
      context: "Procurando Nemo",
      photo: "/src/assets/characters/dory.png",
      colors: ["#1750FA", "#02080F", "#EDF639"],
      hints: ["Seu nome tem 4 letras ao total, e uma delas é Y.", 'É um peixe da espécie cirurgião-patela, e seu lema é "Continue a nadar!"', "Esquece as coisas rapidamente."]
    },
    {
      name: "Shrek",
      context: "Shrek",
      photo: "/src/assets/characters/shrek.png",
      colors: ["#8F9A3B", "#E0D7C5", "#896B46"],
      hints: ["Teve uma vida solitária em um pântano, longe dos humanos.", "Casou-se com a princesa Fiona e teve vários filhos.", "Tem um senso de humor infantil, inclusive fazendo piadas com peidos."]
    }
  ]);

  const [character, setCharacter] = useState({});
  const [userInput, setUserInput] = useState("");

  const [bgColor, setBgColor] = useState("");
  const [lifeAmount, setLifeAmount] = useState(5);
  const [hintAmount, setHintAmount] = useState(3);
  const [points, setPoints] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const [soundEffect, setSoundEffect] = useState("");
  const [soundEffectsOn, setSoundEffectsOn] = useState(false);

  useEffect(() => getNewRandomCharacter(), []);

  useEffect(() => {
    if (gameStarted && !gameEnded) handleAnswer()
  }, [userInput]);

  useEffect(() => {
    if (!(lifeAmount > 0)) gameOver()
  });

  // Everytime soundEffect changes, the accordingly soundEffect is played. Remember initial value is falsy (empty string), and it's setted falsy again after soundEffect is played.
  useEffect(() => {
    if (soundEffect) {
      new Audio(soundEffect).play();
      if (soundEffect !== soundGameOver) setSoundEffect("");
    }
  }, [soundEffect])

  const getNewRandomCharacter = () => {
    const characterIndex = Math.floor(Math.random() * (characterList.length));
    const newRandomCharacter = characterList[characterIndex];
    setCharacter(newRandomCharacter);

    updateCharacterList(newRandomCharacter);
  }

  const updateCharacterList = (characterToRemove) => {
    const indexCharacterToRemove = characterList.indexOf(characterToRemove);
    const newCharacterList = characterList.filter((e, index) => index !== indexCharacterToRemove);
    setCharacterList(newCharacterList);
  }

  const handleAnswer = () => {
    console.log(lifeAmount);
    if (userInput.toLowerCase() == character.name.toLowerCase()) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  const correctAnswer = () => {
    console.log("acertou");
    setSoundEffect(soundCorrectAnswer);
    setPoints(points + 100);
    setBgColor("#77DD77");
    setTimeout(() => setBgColor(""), 2000);
    getNewRandomCharacter();
  }

  const wrongAnswer = () => {
    console.log("errou");
    setSoundEffect(soundWrongAnswer);
    setBgColor("#FF6961");
    setTimeout(() => setBgColor(""), 2000);
    setLifeAmount(lifeAmount - 1);
  }

  const skipQuestion = () => {
    console.log("pulou a questão");
    setSoundEffect(soundSkipQuestion);
    setBgColor("#FDFD96");
    setTimeout(() => setBgColor(""), 2000);
    setLifeAmount(lifeAmount - 1);
    getNewRandomCharacter();
  }

  const askForAHint = () => {
    setSoundEffect(soundAskForAHint);
    setHintAmount(hintAmount - 1);
  }

  const gameOver = () => {
    setSoundEffect(soundGameOver);
    setGameEnded(true);
  }

  return (
    <div style={{ backgroundColor: bgColor }} className="App d-flex align-items-center justify-content-center gap-4">
      <Character character={character} />
      <aside className='col-4'>
        <Header />
        <UserInteraction setUserInputGlobal={setUserInput} setGameStarted={setGameStarted} gameEnded={gameEnded} skipQuestion={skipQuestion} hints={character.hints} hintAmount={hintAmount} askForAHint={askForAHint} points={points} />
        <UserInfo lifeAmount={lifeAmount} hintAmount={hintAmount} points={points} />
      </aside>
    </div>
  )
}

export default App
