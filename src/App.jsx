import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Navbar></Navbar>
          <main className="min-h-screen">
            <Outlet></Outlet>
          </main>
          <Footer></Footer>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
