import { useState } from 'react';
import './App.css';
import AudioButton from './components/AudioButton'
import * as allaudio from './audioImport'

function App() {
  
  const buttons = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  const [text, setText] = useState('')
  const handleText = (id) => setText(id)
   
  let audioArray = []
  for (const key in allaudio) {
    const element = allaudio[key];
      audioArray.push(element); }
  const mappedList = buttons.map((i, index) => 
  <AudioButton id={i} key={i} 
  audiosrc={audioArray[index]} 
  onMouseDown={() => handleText(i)} />)
 
  return (
    <div id="drum-machine">
      <div className='container'>
      {mappedList}     </div>
      <p className='display' id="display">{text}</p>
    </div>
  );
}

export default App;
