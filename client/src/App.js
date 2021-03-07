import './App.css';
import { Container } from '@chakra-ui/react';

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
            <Container className="synth__container synth--recordheader"><h3>Record</h3></Container>
            <Container className="synth__container synth--slider">Record slider</Container>
            <Container className="synth__container synth--save">Save recording to local storage</Container>
            <Container className="synth__container synth--notes">Notes/keys being recorded</Container>
            <Container className="synth__container synth--keyboard">Keyboard</Container>
            <Container className="synth__container synth--savedheader">Saved songs</Container>
            <Container className="synth__container synth--list">List of saved songs</Container>
        </main>
      </div>
    </div>
  );
}

export default App;
