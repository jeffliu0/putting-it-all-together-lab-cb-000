import React, { Component } from 'react'
import UserBlackjack from 'user_blackjack'
import AIBlackjack from 'ai_blackjack'

export default class App extends Component{
  constructor(props){
    super(props)

    this.hitMe = this.hitMe.bind(this)
  }

  hitMe(user){

  }
  render(){
    return(
      <UserBlackjack store = {this.props.store} />
      <AIBlackjack store = {this.props.store}/>
    )
  }
}
