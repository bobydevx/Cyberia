import { Route, Routes } from "react-router";
import "./App.css";
import { Welcome } from "../features/welcome";

function App() {
  return (
    <Routes>
      {/* <Route index element={}></Route> */}
      <Route path="welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
