// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

//Import all screens
import Auth from "./Screens/Auth";
import Boards from "./Screens/Boards";
import Dashboard from "./Screens/Dashboard";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
              <Route path="/signin" element = {<Auth/>}></Route>
              <Route path="/dashboard" element = {<Dashboard/>}></Route>
              <Route path="/boards/:boardId" element = {<Boards/>}></Route>
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </div>
  )
}

export default App
