import { useDispatch, useSelector } from "react-redux";
import { INCREASE , DECREASE , TOGGLE_COUNTER } from '../Store/counterReducer';

function App() {
  const {value , showCounter}= useSelector(state=> state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {showCounter ? 
      <>
      <div className="counter">Counter: {value}</div>
      <div>
        <button className="btn btn-primary" onClick={()=>dispatch(INCREASE())}>increase +</button>
        <button className="btn btn-primary" onClick={()=>dispatch(DECREASE())}>decrease -</button>
      </div>
      </>
          : '' }
      <div>
        <button className="btn btn-primary" onClick={()=>dispatch(TOGGLE_COUNTER())}>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;