import {useState} from 'react';

export default function Board() {
  
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (<>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div >
    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </>);
}

/* function Square({value}) {
 * The reason {value} is in brackets is because Reaction functions take a 
 * *props* object, and value is an attribute for that props object
 */

/* If value is passed in without brackets, we get this error:
 * Objects are not valid as a React child (found: object with keys {value}). 
 * 
 * React docs: https://legacy.reactjs.org/docs/components-and-props.html
 * This function is a valid React component because it accepts a single “props” 
 * (which stands for properties) object argument with data and returns a React 
 * element. We call such components “function components” because they are 
 * literally JavaScript functions. 
 */ 



function Square({value, onSquareClick}) {
  return (<>
    <button 
      className="square"
      onClick={onSquareClick}
      >
        {value}
    </button>
  </>)
}