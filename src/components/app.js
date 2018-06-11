import React, { Component } from 'react'
import UserBlackjack from 'user_blackjack'
import AIBlackjack from 'ai_blackjack'

export default class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <UserBlackjack />
      <AIBlackjack />
    )
  }
}
