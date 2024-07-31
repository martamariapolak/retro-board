import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Board from './board/Board'

function App() {
  const [layout, setLayout] = useState("row");

  return (
    <>
      <main className={'content ${Layout}'}>
        <Header layout={layout} setLayout={setLayout} />
        <Board layout={layout} setLayout={setLayout}/>
      </main>
          </>
  )
}

export default App
