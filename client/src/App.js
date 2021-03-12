import './App.css';
import React, {useState, useEffect } from 'react';
import { Box, Button, AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
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
  const [savedTracks, setSavedTracks] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()


  const mainController = async (key, action)=> {
    switch(key){
      case 'KeyA':
        action('a', false);
        break;
      case 'KeyS':
        action('s', false);
        break;
      case 'KeyD':
        action('d', false);
        break;
      case 'KeyF':
        action('f', false);
        break;
      case 'KeyG':
        action('g', false);
        break;
      case 'KeyH':
        action('h', false);
        break;
      case 'KeyJ':
        action('j', false);
        break;
      case 'KeyK':
        action('k', false);
        break;
      case 'KeyL':
        action('l', false);
        break;
      default:
        return;
    }
  }

  const _handleKeyUp = async (e) => {
    mainController(e.code, keyHelper)
  }

  const _handleKeyDown = async (e) => {
    mainController(e.code, noteHelper)
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

  const keyHelper = async (key, isPlayback) => {
    let keyDiv = document.getElementById('key-' + key);
    keyDiv.style.background = 'white';
    if(!isPlayback) setRecordedKeys(prevState => [...prevState, key]);
  }

  const playbackAssist = (note) => {
    noteHelper(note);
    keyHelper(note, true);
  }

  const saveRecording = () => {
    // setSavedTracks(savedTracks && savedTracks.length > 0 ? [...savedTracks, recordedKeys] : recordedKeys);
    // if(recordedKeys.length > 0) localStorage.setItem('synthjive_recordings', savedTracks);
    //massive memory leak here
    //might need to use cookies instead of local storage and restructure recordings
  }

  const playBack = async () => {
    if(recordedKeys.length > 0){
      for(let note of recordedKeys){
        await playbackAssist(note);
      }
    }
  }

  useEffect(()=> {
    setIsOpen(true);
    let savedTracks = localStorage.getItem('synthjive_recordings');
    setSavedTracks(savedTracks);
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
                <AlertDialogContent className='synth__alert'>
                  
                  <AlertDialogBody>
                    Press the corresponding letters on the piano keys to get started!
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose} className='synth__alert--btn'>
                      Close
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
            <div className='gui__controls'>
              <Box className="synth__box synth--play">
              <Button colorScheme="#93d1ce" size='lg' variant="ghost" className='synth__btn--clear' onClick={playBack}>
                  Playback Recording
                </Button>
              </Box>
              <Box className="synth__box synth--save">
              <Button colorScheme="#93d1ce" size='lg' variant="ghost" className='synth__btn--clear' onClick={saveRecording}>
                  Save Recording
                </Button>
              </Box>
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
                {keystrokes.map((note, i)=> <Key key={i} text={note} mouseDown={_handleKeyDown} mouseUp={_handleKeyUp} />)}
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
            <Box className="synth__box synth--list">
              {/* {savedTracks && savedTracks.length > 0 ? savedTracks.map(track => <p>{track}</p>) : 'No recordings yet.'} */}
            </Box>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
