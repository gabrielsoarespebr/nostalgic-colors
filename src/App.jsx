import { useEffect, useState } from 'react'
import './App.css'
import { Character } from './components/Character'
import { UserInfo } from './components/UserInfo'
import { Header } from './components/Header'
import { UserInteraction } from './components/UserInteraction'

import characters from './data/characters.json'

import soundCorrectAnswer from '../src/assets/audios/effects/correctAnswer.wav'
import soundWrongAnswer from '../src/assets/audios/effects/wrongAnswer.wav'
import soundSkipQuestion from '../src/assets/audios/effects/skip.wav'
import soundAskForAHint from '../src/assets/audios/effects/hint.wav'
import soundGameOver from '../src/assets/audios/effects/gameOver.wav'

function App() {
  const [characterList, setCharacterList] = useState(characters);

  const [character, setCharacter] = useState({});
  const [userInput, setUserInput] = useState("");

  const [bgColor, setBgColor] = useState("");
  const [showCharacter, setShowCharacter] = useState(false);

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
    if (userInput.toLowerCase() == character.name.toLowerCase()) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  const correctAnswer = () => {
    setSoundEffect(soundCorrectAnswer);
    setPoints(points + 100);
    setBgColor("#77DD77");
    setShowCharacter(true);
    setTimeout(() => {
      setBgColor("");
      setShowCharacter(false);
      getNewRandomCharacter();
    }, 2000);
  }

  const wrongAnswer = () => {
    setSoundEffect(soundWrongAnswer);
    setBgColor("#FF6961");
    setTimeout(() => setBgColor(""), 2000);
    setLifeAmount(lifeAmount - 1);
  }

  const skipQuestion = () => {
    setSoundEffect(soundSkipQuestion);
    setBgColor("#FDFD96");
    setShowCharacter(true);
    setLifeAmount(lifeAmount - 1);
    setTimeout(() => {
      setBgColor("");
      setShowCharacter(false);
      getNewRandomCharacter();
    }, 2000);
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
    <div style={{ backgroundColor: bgColor }} className="App d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-3">
      <Character character={character} showCharacter={showCharacter} />
      <aside className='col-md-4'>
        <Header />
        <UserInteraction setUserInputGlobal={setUserInput} setGameStarted={setGameStarted} gameEnded={gameEnded} skipQuestion={skipQuestion} hints={character.hints} hintAmount={hintAmount} askForAHint={askForAHint} points={points} soundEffectsOn={soundEffectsOn} setSoundEffectsOn={setSoundEffectsOn} />
        <UserInfo lifeAmount={lifeAmount} hintAmount={hintAmount} points={points} />
      </aside>
    </div>
  )
}

export default App
