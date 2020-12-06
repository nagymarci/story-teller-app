import React, { useState, useEffect, useRef } from 'react';
import { Table, Container, Row } from 'react-bootstrap';

export const StoryTeller = ({gameId}) => {
  const [gameState, setGameState] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  console.log("storyteller: gameId: "+ gameId)

  const ws = useRef(null)

  useEffect(() => { // handle websocket creation
    if (!gameId) {
      return
    }

    console.log("creating new websocket for gameId " + gameId)
    ws.current = new WebSocket(window.wsUrl + "/" + gameId + "/ws")

    return () => {
      ws.current.close();
    }
  }, [gameId])

  useEffect(() => { // handle websocket onevent
    if (!ws.current) {
      return
    }

    ws.current.onmessage = (e) => {
      const event = JSON.parse(e.data)
      setGameState(event.Data)
    }
  }, [gameId])
  
  useEffect(() => {
    //console.log ("isloading in useffect " + isLoading)
    //if (isLoading) {
      fetch(window.apiUrl + "/" + gameId).then((res) => Promise.all([res.status, res.json()]))
      .then(([status, result]) => {
        if (status !== 200) {
          console.log("got response status " + status)
          setLoading(false)
          setNotFound(true)
        }
        console.log(status, result)
        setGameState(result)
        setLoading(false)
      })
    //}
  }, [gameId])

  const handleUse = (id) => {
    fetch(window.apiUrl + "/" + gameId + "/" + id, {
      method: "post"
    }).then((res) => Promise.all([res.status, res.json()]))
    .then(([status, result]) => {
      console.log(status, result)
      setGameState(result)
    })
  }

  if (isLoading) {
    return "Mese összetevőinek készítése..."
  }

  if (notFound) {
    return "Nem talalom a meset..."
  }

  console.log("-------")
  console.log(gameState)
  return (
    <Container className="StoryTeller">
      {gameId !== "" && 
      <Row className="mt-5">
        <Table bordered>
        <tbody>
        <tr>
        {gameState.emojis.map((emoji) => {
          return (
            <td key={emoji.id} style={{fontSize: 50}} onClick={() => handleUse(emoji.id)}>
              {emoji.symbol}
              </td>
          )
        })}
        </tr>
        </tbody>
        </Table>
      </Row> }
      <Row>
        <h2>A te meséd:</h2>
        <Table>
          <tbody>
            <tr>
            {gameId !== "" && gameState.story.map((symbol, index) => {
              return (
                <td key={index} style={{fontSize: 50}}>
                  {symbol}
                  </td>
              )
            })}
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}