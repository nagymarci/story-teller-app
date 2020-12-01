import './App.css';
import React from 'react';
import { StoryTeller } from './StoryTeller';
import { Container, Row} from 'react-bootstrap';

function App() {

  return (
    <Container className="App">
      <Row className="mt-5">
      <StoryTeller />
      </Row>
    </Container>
  );
}

export default App;
