import Home from "./pages/Home";
import AddPizza from "./pages/AddPizza";
import EditPizza from "./pages/EditPizza";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-pizza" element={<AddPizza />} />
        <Route path="/edit-pizza" element={<EditPizza />} />
      </Routes>
    </>
  )
}

export default App;