import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import { Box, Button, AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay, } from '@chakra-ui/react';
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
  const [recordedKeys, setRecordedKeys] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  const _handleKeyUp = async (e) => {
    switch(e.code){
      case 'KeyA':
        keyHelper('a');
        break;
      case 'KeyS':
        keyHelper('s');
        break;
      case 'KeyD':
        keyHelper('d');
        break;
      case 'KeyF':
        keyHelper('f');
        break;
      case 'KeyG':
        keyHelper('g');
        break;
      case 'KeyH':
        keyHelper('h');
        break;
      case 'KeyJ':
        keyHelper('j');
        break;
      case 'KeyL':
        keyHelper('l');
        break;
      default:
        return;
    }
  }

  const _handleKeyDown = async (e) => {
    switch(e.code){
      case 'KeyA':
        noteHelper('a');
        break;
      case 'KeyS':
        noteHelper('s');
        break;
      case 'KeyD':
        noteHelper('d');
        break;
      case 'KeyF':
        noteHelper('f');
        break;
      case 'KeyG':
        noteHelper('g');
        break;
      case 'KeyH':
        noteHelper('h');
        break;
      case 'KeyJ':
        noteHelper('j');
        break;
      case 'KeyK':
        noteHelper('k');
        break;
      case 'KeyL':
        noteHelper('l');
        break;
      default:
        return; 
    }
  }

  const clearRecording = () => {
    setRecordedKeys([]);
  }

  const noteHelper = async (key) => {
    let audioDiv = document.getElementById('note-' + key);
    let keyDiv = document.getElementById('key-' + key);
    keyDiv.style.background = 'yellow';
    audioDiv.currentTime = 0;
    audioDiv.play();
  }

  const keyHelper = async (key) => {
    let keyDiv = document.getElementById('key-' + key);
    keyDiv.style.background = 'white';
    setRecordedKeys(prevState => [...prevState, key])
  }

  useEffect(()=> {
    setIsOpen(true);
    document.addEventListener('keydown', _handleKeyDown);
    document.addEventListener('keyup', _handleKeyUp);
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
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}>
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Welcome!
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Press the corresponding letters on the piano keys to get started!
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Close
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
            <div className='gui__controls'>
              <Box className="synth__box synth--play">Playback Notes</Box>
              <Box className="synth__box synth--save">Save recording to local storage</Box>
              <Box className='synth__box synth--clear'>
                <Button colorScheme="#93d1ce" size='lg' variant="ghost" className='synth__btn--clear' onClick={clearRecording}>
                  Clear Recording
                </Button>
              </Box>
              <Box className="synth__box synth--notes">
                <p>{recordedKeys}</p>
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
