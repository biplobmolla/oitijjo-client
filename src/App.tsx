import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";

function App() {
  return (
    <BrowserRouter>
      <div className=" min-h-screen flex flex-col">
        <Navigation />
        <main className="min-height">
          <Routes>
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
