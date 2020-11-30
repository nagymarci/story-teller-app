import './App.css';
import React, { useState } from 'react';
import { StoryTeller } from './StoryTeller';
import { Container, Row, Button } from 'react-bootstrap';

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
