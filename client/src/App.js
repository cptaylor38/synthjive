import './App.css';
import { Box, Switch, FormControl, FormLabel } from '@chakra-ui/react';
import Key from './Key';

function App() {
  const keystrokes = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
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
              <Box className="synth__box synth--slider">
                <FormControl display="flex" justifyContent="center" alignItems="center">
                <FormLabel className='synth__record--label' htmlFor="record-button" mb="0">
                    Record
                </FormLabel>
                <Switch colorScheme="rgb(40, 255, 40);" size="lg" id="record-button" />
                </FormControl>
              </Box>
              <Box className="synth__box synth--play">Playback Notes</Box>
              <Box className="synth__box synth--save">Save recording to local storage</Box>
              <Box className="synth__box synth--notes">Notes/keys being recorded</Box>
            </div>
            <div className='gui__keyboard'>
              <Box className="synth__box synth--keyboard">
                {keystrokes.map((char, i)=> <Key key={i} text={char} />)}
              </Box>
            </div>
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
