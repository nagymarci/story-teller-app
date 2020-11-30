import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

export const StoryTeller = () => {
  const [gameState, setGameState] = useState(null)
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    if (isLoading && gameState == null) {
      fetch(window.apiUrl, {
        method: "post"
      }).then((res) => Promise.all([res.status, res.json()]))
      .then(([status, result]) => {
        console.log(status, result)
        setGameState(result)
        setLoading(false)
      })
    }
  })

  if (isLoading) {
    return "Loading"
  }

  return (
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
  )
}