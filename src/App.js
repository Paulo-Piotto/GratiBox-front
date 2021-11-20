import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  const [user, serUser] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
