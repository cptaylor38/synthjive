import './App.css';
import React, {useState, useEffect} from 'react';
import { Box } from '@chakra-ui/react';
import Key from './Key';
import a from './Assets/keyboardsounds/a.mp3';
import s from './Assets/keyboardsounds/s.mp3';
import d from './Assets/keyboardsounds/d.mp3';
import f from './Assets/keyboardsounds/f.mp3';
import g from './Assets/keyboardsounds/g.mp3';
import h from './Assets/keyboardsounds/h.mp3';
import j from './Assets/keyboardsounds/j.mp3';
import k from './Assets/keyboardsounds/k.mp3';
import l from './Assets/keyboardsounds/l.mp3';

function App() {
  const keystrokes = [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const [recordedKeys, setRecordedKeys] = useState();
  const _handleKeyDown = async (e) => {
    switch(e.code){
      case 'KeyA':
        document.getElementById('note-a').play();
        break;
      case 'KeyS':
        document.getElementById('note-s').play();
        break;
      case 'KeyD':
        document.getElementById('note-d').play();
        break;
      case 'KeyF':
        document.getElementById('note-f').play();
        break;
      case 'KeyG':
        document.getElementById('note-g').play();
        break;
      case 'KeyH':
        document.getElementById('note-h').play();
        break;
      case 'KeyJ':
        document.getElementById('note-j').play();
        break;
      case 'KeyK':
        document.getElementById('note-k').play();
        break;
      case 'KeyL':
        document.getElementById('note-l').play();
        break;
      default:
        return; 
    }
  }
  useEffect(()=> {
    document.addEventListener('keydown', _handleKeyDown);
  }, [])
  return (
    <div className="App">
      <div className='synthjive__container'>
        <nav className='synth__nav__container'>
          <div className='synth__navbar'>
            <div className='synth__brand'>SynthJive</div>
          </div>
        </nav>
        <main className='synth__main'>
          <section>
            <div className='gui__controls'>
              <Box className="synth__box synth--play">Playback Notes</Box>
              <Box className="synth__box synth--save">Save recording to local storage</Box>
              <Box className="synth__box synth--notes">
                <p>recorded notes go here</p>
              </Box>
            </div>
            <div className='gui__keyboard'>
              <Box className="synth__box synth--keyboard">
                {keystrokes.map((note, i)=> <Key key={i} text={note} />)}
              </Box>
            </div>
            <audio id='note-a'><source src={a}></source></audio>
            <audio id='note-s'><source src={s}></source></audio>
            <audio id='note-d'><source src={d}></source></audio>
            <audio id='note-f'><source src={f}></source></audio>
            <audio id='note-g'><source src={g}></source></audio>
            <audio id='note-h'><source src={h}></source></audio>
            <audio id='note-j'><source src={j}></source></audio>
            <audio id='note-k'><source src={k}></source></audio>
            <audio id='note-l'><source src={l}></source></audio>
          </section>
          <aside>
            <Box className="synth__box synth--savedheader">Saved songs</Box>
            <Box className="synth__box synth--list">List of saved songs</Box>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
