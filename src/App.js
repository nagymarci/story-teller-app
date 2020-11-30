import './App.css';
import { StoryTeller } from './StoryTeller';
import { Container, Row, Button } from 'react-bootstrap';

function App() {

  const handleClick = () => {
    window.location.reload()
  }

  return (
    <Container className="App">
      <Row className="mt-1">
        <Button onClick={handleClick}>Új mese</Button>
      </Row>
      <Row className="mt-5">
      <StoryTeller />
      </Row>
    </Container>
  );
}

export default App;
