import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
