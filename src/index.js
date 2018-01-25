import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";

const ACTION_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

function reducer(state = 0, action) {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return state + 1;
    case ACTION_TYPE.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(render);

function render() {
  ReactDOM.render(
    <Counter count={store.getState()} />,
    document.getElementById("root")
  );
}

// Initialize view for the first time
render();

function Counter(props) {
  const { count } = props;

  return (
    <div className="counter-container">
      <div className={getClassName(count)}> {count}</div>
      <div>
        <button
          className="increment"
          title="Increment"
          onClick={() => store.dispatch({ type: ACTION_TYPE.INCREMENT })}
        >
          +
        </button>
        <button
          className="decrement"
          title="Decrement"
          onClick={() => store.dispatch({ type: ACTION_TYPE.DECREMENT })}
        >
          -
        </button>
      </div>
    </div>
  );
}

// toggle colors when you increment numbers
function getClassName(num) {
  return num % 2 ? "counter color-one" : "counter color-two";
}
