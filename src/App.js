import "./App.css";
import Home from "./pages/home/Home.js";
import Header from "./pages/common/components/Header";
import Footer from "./pages/common/components/Footer";
// import "./pages/home/style/homepage.css";
// import Carousal from "./pages/common/components/Carousal";
import HomeMasonry from "./pages/home/components/HomeMasonry";
import { BrowserRouter, Routes } from "react-router-dom";
import DefinedRoutes from "./Routing/DefinedRoutes";


function App() {
  return (
    <div className="App">
      <Header />
   
      <BrowserRouter>
        <DefinedRoutes />
      </BrowserRouter>
    
   
      <Footer />
    </div>
  );
}

export default App;
