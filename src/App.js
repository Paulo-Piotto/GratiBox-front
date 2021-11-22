import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import UserContext from './contexts/userContext';
import Switch from "./components/switch";
import NewPlan from "./components/newPlan";
import Delivery from "./components/delivery";

function App() {
  const [user, setUser] = useState({});
  const [newPlan, setNewPlan] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/sign-up" element={<SignUp />} exact/>
          <Route path="/sign-in" element={<SignIn />} exact/>
          <Route path="/my-plan" element={<Switch />} exact/>
          <Route path="/new-plan" element={<NewPlan setNewPlan={setNewPlan} />}  exact/>
          <Route path="/delivery" element={<Delivery newPlan={newPlan} />}  exact/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
