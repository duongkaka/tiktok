import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Folowing from "./pages/Folowing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flow" element={<Folowing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
