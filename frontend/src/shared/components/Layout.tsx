import { Outlet } from "react-router";
import Leftbar from "./Leftbar";

function Layout() {
  return (
    <div className="flex">
      <Leftbar />
      <Outlet />
    </div>
  );
}

export default Layout;
