
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'




function App() {


  return (
    <>
    <Navbar></Navbar>
    <main className="min-h-screen">
      <Outlet></Outlet>
    </main>
    <Footer></Footer>
    
    
    </>
  )
}

export default App
