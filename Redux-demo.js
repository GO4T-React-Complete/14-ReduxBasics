const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) =>{  

  if (action.type === 'increment'){
    state.counter = state.counter+1;
  } 
  if (action.type === 'decrement'){
    state.counter = state.counter-1;
  } 
  return state;
};
//state = {counter: 0} is a default value when calling counterReducer
//One the state is set it will not use that default value if counterReducer is called again

const store = redux.createStore(counterReducer);
console.log('Initial State: ',store.getState());


const  counterSubscriber = () =>{
  const latestState = store.getState();
  console.log('inside subscriber... ',latestState);
}; // Remember this subscriber will not get run until an action is called on the Store

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});

store.dispatch({type: 'decrement'});