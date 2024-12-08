
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'




function App() {


  return (
    <>
    <Navbar></Navbar>
    <main className="min-h-screen">
      <Outlet></Outlet>
    </main>
    <footer>footer</footer>
    
    
    </>
  )
}

export default App
