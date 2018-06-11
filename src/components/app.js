import React, { Component } from 'react'
import UserBlackjack from 'user_blackjack'
import AIBlackjack from 'ai_blackjack'

export default class App extends Component{

  render(){
    return(
      <UserBlackjack />
      <AIBlackjack />
    )
  }
}
