import { useRef } from "react";

export default function AudioButton(props) {
  const audio1 = useRef(null)
  
  const playHandler = () => {
    audio1.current.play()
  }
  
  return (
    <button className="drum-pad" {...props} onClick={() => playHandler(props.id)} autoFocus={true} 
     onKeyDown={(event) => {
      playHandler()
      console.log(event.code[3]) }
     }>
        {props.id}
        <audio className="clip" src={props.audiosrc} ref={audio1} id={props.id} ></audio>
    </button>
  )
}
 
  