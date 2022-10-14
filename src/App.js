import "./App.css";
import Home from "./pages/home/Home.js";
import Header from "./pages/common/components/Header";
import Footer from "./pages/common/components/Footer";
// import "./pages/home/style/homepage.css";
// import Carousal from "./pages/common/components/Carousal";
// import HomeMasonry from "./pages/home/components/HomeMasonry";

function App() {
  return (
    <div className="App">
      
      <Header />

      <Home /> 
    
              <Footer/>
    </div>
  );
}

export default App;
