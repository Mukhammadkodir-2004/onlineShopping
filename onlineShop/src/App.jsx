import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header, Main, Navbar } from "./components";
import { Cart, Checkout, Home,  Shop } from "./pages"; // Import other page components

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path ="/checkout" element={<Checkout />} />
          <Route path ="/cart" element ={<Cart/>}/>
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
