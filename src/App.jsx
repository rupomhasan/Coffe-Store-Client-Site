import { Outlet } from "react-router-dom";
import "./App.css";
import Navabar from "./Components/Navabar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navabar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
