import "./App.css";
import Header from "./pages/common/components/Header";
import Footer from "./pages/common/components/Footer";
// import "./pages/home/style/homepage.css";
// import Carousal from "./pages/common/components/Carousal";
import { BrowserRouter, Routes } from "react-router-dom";
import DefinedRoutes from "./Routing/DefinedRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';


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
