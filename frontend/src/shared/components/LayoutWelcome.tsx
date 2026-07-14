import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./Navbar";

function LayoutWelcome() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutWelcome;
