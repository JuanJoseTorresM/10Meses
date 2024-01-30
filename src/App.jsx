import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Vivido from "./pages/Vivido";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Inicio />} path="/"></Route>
        <Route element={<Vivido />} path="/vivido"></Route>
      </Routes>
    </>
  )
}
export default App;