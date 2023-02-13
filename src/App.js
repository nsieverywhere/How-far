import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Reset from "./pages/Resetpassword/Reset";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
