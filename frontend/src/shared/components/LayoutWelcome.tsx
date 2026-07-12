import Footer from "./Footer";
import NavBar from "./Navbar";

function LayoutWelcome({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default LayoutWelcome;
