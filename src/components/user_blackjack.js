import React from 'react'
import App from './app'

const UserBlackjack = (props) => (
      <h1> Player1 </h1>
      <h2> {props.store.userCards.length} </h2>
      <ul>
        {
          props.store.userCards.map(card =>
            <li> {card.name} </li>
          )
        }
      </ul>
      <form onSubmit = {props.hitMe}>
        <button type="submit">Hit Me</button>
      </form>
      <form onSubmit = {props.stay}>
        <button type="submit">Stay</button>
      </form>
    )
  
