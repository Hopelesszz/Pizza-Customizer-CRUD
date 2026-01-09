import Home from "./pages/Home";
import AddPizza from "./pages/AddPizza";
import EditPizza from "./pages/EditPizza";
import { Routes,Route } from "react-router-dom";
import { useThemeStore } from "./stores/ThemeStore";
import { useEffect } from "react";

function App() {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    }
    else {
      root.classList.remove("dark");
    }
  }, [theme]);
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