import React, { useEffect, useState } from 'react';
import './App.css'
import BoardComponent from './component/BoardComponent';
import { Board } from './models/Board';

const App = () => {
  const [board, setBoard] = useState(new Board())
  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCell()
    newBoard.addFigures()
    setBoard(newBoard)
  }
  return (
    <div className='App'>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
