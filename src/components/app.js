import React, { Component } from 'react'
import UserBlackjack from 'user_blackjack'
import AIBlackjack from 'ai_blackjack'

export default class App extends Component{
  constructor(props){
    super(props)

    this.hitMe = this.hitMe.bind(this)
  }

  hitMe(user){
    if(user === 'user'){
      this.props.store.dispatch(hitUser(this.props.store.getState().deck))
    }
    else{
      this.props.store.dispatch(hitAI(this.props.store.getState().deck))
    }
  }

  calculateAIScore(winner){
    let score = this.props.store.getState().aiCards.reduce((acc, currValue) =>
    acc += currValue
    )
  }
  render(){
    return(
      <UserBlackjack store = {this.props.store} />
      <AIBlackjack store = {this.props.store}/>
    )
  }
}
