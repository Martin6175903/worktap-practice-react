import {Route, Routes} from "react-router";
import {Main} from "./pages/main/Main.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default App
