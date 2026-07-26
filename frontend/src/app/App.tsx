import { Route, Routes } from "react-router";
import "@/app/App.css";
import Welcome from "@/features/welcome/pages/Welcome";
import Login from "@/features/auth/pages/login";
import LayoutWelcome from "@/shared/components/LayoutWelcome";
import Register from "@/features/auth/pages/register";
import Dashboard from "@/features/dashboard/pages/dashboard";
import Layout from "@/shared/components/Layout";
import Cabins from "@/features/cabins/pages/cabins";
import MyReservations from "@/features/reservations/pages/MyReservations";
import CabinBooking from "@/features/reservations/pages/CabinBooking";
import Games from "@/features/games/pages/games";
import Menu from "@/features/menu/pages/menu";

function App() {
  return (
    <Routes>
      {/* Layout Welcome (navbar + footer) */}
      <Route element={<LayoutWelcome />}>
        {/* Auth */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* Welcome Page */}
        <Route index element={<Welcome />} />

        {/* <Route path="welcome" element={<Welcome />} /> */}
      </Route>

      {/* Layout (leftbar) */}
      <Route element={<Layout />}>
        {/* <Route index element={<Dashboard />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cabinas" element={<Cabins />} />
        <Route path="mis-reservas" element={<MyReservations />} />
        <Route path="reserva/:id" element={<CabinBooking />} />
        <Route path="juegos" element={<Games />} />
        <Route path="menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;
