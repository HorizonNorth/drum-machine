import { useState, useEffect} from 'react';
import './App.css';
import lettersWithSounds from './audioimport'

function App() {
  
  const [text, setText] = useState('hi =)')
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      let code = event.code[3]
      try {
        playSound(code,  lettersWithSounds[code])
      } catch{}
      })
  }, [])
  
  const playSound = (text) => {
    let audio = document.getElementById(text)
    audio.play()
    setText(text)
  } 
  
  return (
    <div id="drum-machine" >
      <div className='container'> 
        {lettersWithSounds.map((item) => { return (
          <button 
          className="drum-pad" 
          key={item.sound} id={item.sound}
          onClick={() => {playSound(item.text)}} 
          >
            {item.text}
            <audio 
            className="clip" 
            id={item.text} 
            src={item.sound}>
            </audio>
          </button>
          )}
        )}
      </div>
      <p className='display' id="display">{text}</p>
    </div>
  );
}

export default App
