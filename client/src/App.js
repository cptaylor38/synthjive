import './App.css';
import { Box } from '@chakra-ui/react';

function App() {

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
              <Box className="synth__box synth--recordheader">Record</Box>
              <Box className="synth__box synth--slider">Record slider</Box>
              <Box className="synth__box synth--save">Save recording to local storage</Box>
              <Box className="synth__box synth--notes">Notes/keys being recorded</Box>
            </div>
            <div className='gui__keyboard'>
              <Box className="synth__box synth--keyboard">Keyboard</Box>
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
