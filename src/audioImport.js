import audio0 from './sounds/Dsc_Oh.mp3'
import audio1 from './sounds/RP4_KICK_1.mp3'
import audio2 from './sounds/Heater-1.mp3'
import audio3 from './sounds/Heater-2.mp3'
import audio4 from './sounds/Heater-3.mp3'
import audio5 from './sounds/Heater-4_1.mp3'
import audio6 from './sounds/Heater-6.mp3'
import audio7 from './sounds/Kick_n_Hat.mp3'
import audio8 from './sounds/Cev_H2.mp3'

const sounds = [ audio0, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8 ]
const letters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

let lettersWithSounds = []
for (let i = 0; i < letters.length; i++) {
let element = {}
element.text = letters[i] 
element.sound = sounds[i]
lettersWithSounds.push(element)
}

export default lettersWithSounds