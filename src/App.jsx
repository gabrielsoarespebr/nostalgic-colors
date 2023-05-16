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
      photo: "/src/assets/images/characters/sid.png",
      colors: ["#C5AC72", "#F0E6C1", "#9C4C6F"],
      hints: ["É um bicho-preguiça que fala demais.", "Seu nome tem apenas 3 letras.", "É muito desastrado e às vezes causa acidentes sem querer."]
    },
    {
      name: "Musculoso",
      context: "Apenas um Show",
      photo: "/src/assets/images/characters/musculoso.png",
      colors: ["#A7CF86", "#7197AA", "#5E671A"],
      hints: ["Frequentemente faz piadas sujas e se comporta de maneira inapropriada.", "Conhecido por tirar sua própria camisa e girar.", "Muito competitivo, principalmente quando se trata de brigas e pegadinhas."]
    },
    {
      name: "Pairulito",
      context: "Apenas um Show",
      photo: "/src/assets/images/characters/pairulito.png",
      colors: ["#FFE8E9", "#4E4E4E", "#8B8B8B"],
      hints: ["Sua cabeça é gigante em relação ao seu corpo.", "É muito sensível, emocional e pacífico. Por isso, não gosta de conflitos ou violência.", "Sua ingenuidade faz com que ele seja enganado pelos outros personagens."]
    },
    {
      name: "Bob Esponja",
      context: "Bob Esponja",
      photo: "/src/assets/images/characters/bobesponja.png",
      colors: ["#FFFF36", "#FE230E", "#FE230E"],
      hints: ["Gosta de caçar águas-vivas com seu melhor amigo.", "Trabalha na cozinha do Siri Cascudo, fazendo hamburgueres de siri.", "Mora na Fenda do Biquini e sua casa é um abacaxi."]
    },
    {
      name: "Lula Molusco",
      context: "Bob Esponja",
      photo: "/src/assets/images/characters/lulamolusco.png",
      colors: ["#ADD1C5", "#DC8F19", "#7894C8"],
      hints: ["Seus hobbies são pintar quadros e tocar clarinete.", "Tem personalidade arrogante e frequentemente zomba dos outros personagens.", "É um polvo, apesar de seu nome sugerir que é uma lula."]
    },
    {
      name: "Chaves",
      context: "Chaves",
      photo: "/src/assets/images/characters/chaves.png",
      colors: ["#FDC131", "#D27427", "#2C6623"],
      hints: ["Mora em um barril e está sempre com fome.", 'Seus bordões mais famosos são: "Isso, isso, isso!", "Ninguém tem paciência comigo!" e "Foi sem querer querendo!".', "Quando assustado, sofre piripaques e fica paralisado até que alguém lhe molhe."]
    },
    {
      name: "Quico",
      context: "Chaves",
      photo: "/src/assets/images/characters/quico.png",
      colors: ["#000000", "#FDE732", "#B93131"],
      hints: ["São características marcantes as suas enormes bochechas e seu jeito estranho de chorar.", "É muito vaidoso e gosta de exibir brinquedos e lanches.", 'Um dos seus bordões mais famosos é "Gentalha! Gentalha!".']
    },
    {
      name: "Seu Madruga",
      context: "Chaves",
      photo: "/src/assets/images/characters/seumadruga.png",
      colors: ["#6A758B", "#90959F", "#7FA8C6"],
      hints: ["É visto como vagabundo por estar desempregado devendo 14 meses de aluguel.", "Magro, alto, tem bigode e usa um chapéu de marinheiro.", 'Apesar de ter uma vida dura, acredita que "A vingança nunca é plena, mata a alma e a envenena".']
    },
    {
      name: "Kuririn",
      context: "Dragon Ball",
      photo: "/src/assets/images/characters/kuririn.png",
      colors: ["#FFCDB5", "#E94800", "#070602"],
      hints: ["Baixinho e careca quando se trata de aparência. Justo e leal quando se trata de personalidade.", "Seu nome tem 7 letras e começa com K.", "É um lutador habilidoso e rápido, que já participou de muitos torneios de artes marciais."]
    },
    {
      name: "Majin Boo",
      context: "Dragon Ball",
      photo: "/src/assets/images/characters/majinboo.png",
      colors: ["#FEBED1", "#F6FBF8", "#5D57D1"],
      hints: ["Pode transformar objetos e seres vivos em doces com um simples toque.", "Tem habilidades incríveis de regeneração, podendo se curar de ferimentos graves.", "Sua personalidade é infantil, imprevisível e caótica."]
    },
    {
      name: "Finn",
      context: "Hora de Aventura",
      photo: "/src/assets/images/characters/finn.png",
      colors: ["#FFFFFF", "#50A847", "#2B66B3"],
      hints: ["Em seu nome, a letra N aparece duas vezes.", "Tem muita coragem e ama aventuras.", "Seu melhor amigo é um cão mágico com habilidades de alongamento."]
    },
    {
      name: "Rei Gelado",
      context: "Hora de Aventura",
      photo: "/src/assets/images/characters/reigelado.png",
      colors: ["#FECD00", "#ABDEFE", "#0000FF"],
      hints: ["No aspecto amoroso, é bastante carente, e está sempre em busca de uma princesa para noivar.", "Usa uma coroa com poderes mágicos de gelo.", "Tem um penguim de estimação chamado Gunter."]
    },
    {
      name: "Rei Julien",
      context: "Madagascar",
      photo: "/src/assets/images/characters/reijulien.png",
      colors: ["#FDF165", "#493F39", "#A39E93"],
      hints: ["Acredita ser o rei supremo de todos os animais de Madagascar.", "Ele se remexe muito! Afinal, é um dançarino habilidoso.", "Maurice é seu assistente de confiança."]
    },
    {
      name: "Mickey",
      context: "Mickey Mouse",
      photo: "/src/assets/images/characters/mickey.png",
      colors: ["#000000", "#FF362E", "#FAC127"],
      hints: ["Ele é um camundongo que se tornou símbolo da Disney.", "Seu nome tem 6 letras ao total, dentre elas as letras K e Y.", "Tem personalidade romântica, bondosa e prestativa."]
    },
    {
      name: "Dexter",
      context: "O Laboratório de Dexter",
      photo: "/src/assets/images/characters/dexter.png",
      colors: ["#FFFFFF", "#FEE4DB", "#EB7417"],
      hints: ["É um menino prodígio, com QI extremamente alto.", "Realiza seus experimentos e cria suas invenções em seu laboratório secreto.", "Possui um forte senso de responsabilidade e ética científica."]
    },
    {
      name: "Menino Maluquinho",
      context: "O Menino Maluquinho",
      photo: "/src/assets/images/characters/meninomaluquinho.png",
      colors: ["#FFF212", "#282828", "#B3B5B7"],
      hints: ["Usa uma panela na cabeça.", "Comportamento treloso e imaginação fértil.", "Personagem brasileiro criado por Ziraldo."]
    },
    {
      name: "Edna Moda",
      context: "Os Incríveis",
      photo: "/src/assets/images/characters/ednamoda.png",
      colors: ["#0D0B0B", "#E3C5B8", "#0D0B0B"],
      hints: ["É estilista de super-heróis.", "Usa grandes óculos redondos e tem um corte de cabelo chanel.", "É meticulosa, perfeccionista e muito confiante sobre suas qualidades."]
    },
    {
      name: "Gelado",
      context: "Os Incríveis",
      photo: "/src/assets/images/characters/gelado.png",
      colors: ["#48B1BB", "#412B1D", "#FFFFFF"],
      hints: ["É capaz de criar rampas e escorregadores de gelo para se movimentar com mais rapidez.", 'Muito conhecido pela cena marcante em que fala "Fica frio aí!".', "Seu nome civil é Lúcio Barros, ou, em inglês, Lucius Best."]
    },
    {
      name: "Cosmo",
      context: "Os Padrinhos Mágicos",
      photo: "/src/assets/images/characters/cosmo.png",
      colors: ["#FAC1A3", "#7BB850", "#F8D53B"],
      hints: ["Usa uma coroa e uma varinha mágica.", "Consegue voar devido às suas asas.", "Seu propósito de vida é proteger Timmy Turner."]
    },
    {
      name: "Bart",
      context: "Os Simpsons",
      photo: "/src/assets/images/characters/bart.png",
      colors: ["#FAD835", "#ED4731", "#309ADA"],
      hints: ["Anda de skate.", "Tem o cabelo arrepiado.", "Mora em Springfield."]
    },
    {
      name: "Lisa",
      context: "Os Simpsons",
      photo: "/src/assets/images/characters/lisa.png",
      colors: ["#FAD835", "#E35437", "#FAD835"],
      hints: ["Toca saxofone.", "É defensora dos animais e do meio ambiente.", "Inteligente e madura demais para sua idade."]
    },
    {
      name: "Dory",
      context: "Procurando Nemo",
      photo: "/src/assets/images/characters/dory.png",
      colors: ["#1750FA", "#02080F", "#EDF639"],
      hints: ["Seu nome tem 4 letras ao total, e uma delas é Y.", 'É um peixe da espécie cirurgião-patela, e seu lema é "Continue a nadar!"', "Esquece as coisas rapidamente."]
    },
    {
      name: "Shrek",
      context: "Shrek",
      photo: "/src/assets/images/characters/shrek.png",
      colors: ["#8F9A3B", "#E0D7C5", "#896B46"],
      hints: ["Teve uma vida solitária em um pântano, longe dos humanos.", "Casou-se com a princesa Fiona e teve vários filhos.", "Tem um senso de humor infantil, inclusive fazendo piadas com peidos."]
    },
    {
      name: "Cebolinha",
      context: "Turma da Mônica",
      photo: "/src/assets/images/characters/cebolinha.png",
      colors: ["#00983B", "#050301", "#9B501A"],
      hints: ["É conhecido por trocar o R pelo L ao falar.", "Gosta de zombar os outros, mas sempre acaba apanhando.", "Tem cabelo espetado."]
    },
    {
      name: "Magali",
      context: "Turma da Mônica",
      photo: "/src/assets/images/characters/magali.png",
      colors: ["#FFED02", "#F8C3AE", "#19181D"],
      hints: ["Adora comer melancia.", "Gosta de animais, especialmente gatos.", "Seu nome tem 6 letras: 3 vogais e 3 consoantes."]
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
    if (soundEffectsOn) {
      if (soundEffect) {
        new Audio(soundEffect).play();
        if (soundEffect !== soundGameOver) setSoundEffect("");
      }
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
        <UserInteraction setUserInputGlobal={setUserInput} setGameStarted={setGameStarted} gameEnded={gameEnded} skipQuestion={skipQuestion} hints={character.hints} hintAmount={hintAmount} askForAHint={askForAHint} points={points} soundEffectsOn={soundEffectsOn} setSoundEffectsOn={setSoundEffectsOn} />
        <UserInfo lifeAmount={lifeAmount} hintAmount={hintAmount} points={points} />
      </aside>
    </div>
  )
}

export default App
