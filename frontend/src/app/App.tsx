import { Route, Routes } from "react-router";
import "./App.css";
import { Welcome } from "../features/welcome";
import Login from "@/features/auth/pages/login";
import LayoutWelcome from "@/shared/components/LayoutWelcome";
import Register from "@/features/auth/pages/register";

function App() {
  return (
    <Routes>
      <Route element={<LayoutWelcome />}>
        {/* Auth */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* Welcome Page */}
        <Route path="welcome" element={<Welcome />} />
      </Route>

      {/* <Route index element={}></Route> */}
    </Routes>
  );
}

export default App;
