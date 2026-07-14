import { Route, Routes } from "react-router";
import "./App.css";
import { Welcome } from "../features/welcome";
import Login from "@/features/auth/pages/login";
import LayoutWelcome from "@/shared/components/LayoutWelcome";
import Register from "@/features/auth/pages/register";
import Dashboard from "@/features/dashboard/pages/dashboard";
import Layout from "@/shared/components/Layout";

function App() {
  return (
    <Routes>
      {/* Layout Welcome (navbar + footer) */}
      <Route element={<LayoutWelcome />}>
        {/* Auth */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* Welcome Page */}
        <Route path="welcome" element={<Welcome />} />
      </Route>

      {/* Layout (leftbar) */}
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="cabinas" element={<Welcome />} />
        <Route path="mis-reservas" element={<Welcome />} />
        <Route path="juegos" element={<Welcome />} />
        <Route path="menu" element={<Welcome />} />
      </Route>
    </Routes>
  );
}

export default App;
