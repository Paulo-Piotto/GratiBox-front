import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import UserContext from './contexts/userContext'

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/sign-up" element={<SignUp />} exact/>
          <Route path="/sign-in" element={<SignIn />} exact/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
