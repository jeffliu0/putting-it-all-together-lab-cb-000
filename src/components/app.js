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
     { return acc += currValue },0 )

     if(score > 21){
       return 'BUST'
     }
     else{
       return score
     }

  }

  calculateUserScore(winner){
   const userScore = this.props.store.getState().userCards.reduce((preVal, currVal) => {
           return preVal += currVal.value
         }, 0)
   if (userScore > 21) {
     return "BUST"
   }else if (this.calculateAiScore() === "BUST") {
     return "Winner!"
   }else{
     return userScore
   }
 }
 
  render(){
    return(
      <UserBlackjack store = {this.props.store} />
      <AIBlackjack store = {this.props.store}/>
    )
  }
}
