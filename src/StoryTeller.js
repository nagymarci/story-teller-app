import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Row } from 'react-bootstrap';

export const StoryTeller = () => {
  const [gameState, setGameState] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [gameId, setGameId] = useState(window.location.hash.substring(2))

  console.log(gameId)
  
  useEffect(() => {
    if (isLoading && gameId !== "") {
      fetch(window.apiUrl + "/" + gameId).then((res) => Promise.all([res.status, res.json()]))
      .then(([status, result]) => {
        console.log(status, result)
        setGameState(result)
        setLoading(false)
      })
    }
  }, [isLoading, gameState, gameId])

  const handleClick = () => {
    fetch(window.apiUrl, {
      method: "post"
    }).then((res) => Promise.all([res.status, res.json()]))
    .then(([status, result]) => {
      console.log(status, result)
      window.location.hash = "/" + result.id
      console.log(window.location.hash)
      setGameId(result.id)
      setLoading(true)
    })
  }

  if (isLoading && gameId !== "") {
    return "Mese összetevőinek készítése..."
  }

  return (
    <Container className="StoryTeller">
      <Row className="mt-1">
        <Button onClick={handleClick}>Új mese</Button>
      </Row>
      {gameId !== "" && 
      <Row className="mt-5">
        <Table bordered>
        <tbody>
        <tr>
        {gameState.emojis.map((emoji) => {
          return (
            <td key={emoji.id}>
              {emoji.symbol}
              </td>
          )
        })}
        </tr>
        </tbody>
        </Table>
      </Row> }
    </Container>
  )
}