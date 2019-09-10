import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './App.css';

const initialState = {count: 0};

function reducer(state = {count: 0},action){
  switch (action.type){
    case 'INCREMENT': return {count: state.count + action.amount};
    case 'DECREMENT': return {count: state.count - action.amount};
    case 'RESET': return {count: 0};
    default: return state;
  }
}



function increment(amount){
  return {type: "INCREMENT",amount};
}

function decrement(amount){
  return {type: "DECREMENT",amount};
}

function reset(amount){
  return  { type: 'RESET'};

}
const store = createStore(reducer,initialState);

export default class Counter extends Component {

  state = {
    count: 0
  }
  componentDidMount(){
    store.subscribe(()=> this.forceUpdate())
  }
  reset = () => {
    store.dispatch(reset());
  }
  increment =()=>{
    let amount = parseInt(this.refs.amount.value || 1)
    store.dispatch(increment(amount));
  }
  decrement=()=>{
    let amount = parseInt(this.refs.amount.value || 1)
    store.dispatch(decrement(amount));
  }

  render(){
    const count = store.getState().count
    
    return(
      <div className="counter">
        <span className="count">{count}</span>
        <div className="buttons">
            <button className="decriment" onClick={this.decrement}>-</button>
            <button className="reset" onClick={this.reset}>reset</button>
            <button className="incriment" onClick={this.increment}>+</button>
         
          </div>  
          <input type="text" ref="amount" defaultValue="1"/>
      </div>
    );
  }


}

