import './App.css';
import React, { useState } from 'react';
import { StoryTeller } from './StoryTeller';
import { Container, Row, Button} from 'react-bootstrap';

function App() {
  const [gameId, setGameId] = useState(window.location.hash.substring(2) || null)

  const handleClick = () => {
    fetch(window.apiUrl, {
      method: "post"
    }).then((res) => Promise.all([res.status, res.json()]))
    .then(([status, result]) => {
      console.log(status, result)
      window.location.hash = "/" + result.id
      console.log(window.location.hash)
      setGameId(result.id)
    })
  }
  
  console.log(gameId)
  return (
    <Container className="App">
      <Row className="mt-1">
        <Button onClick={handleClick}>Új mese</Button>
      </Row>
      <Row className="mt-5">
      {gameId != null ?
      <StoryTeller gameId={gameId}/> : undefined
      }
      </Row>
    </Container>
  );
}

export default App;
