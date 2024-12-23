import { Routes, Route } from "react-router-dom"
import HomeMusic from "./pages/homeMusic"


function App() {
  return (
    <>
    <Routes>
      <Route path="music" element={<HomeMusic />} />
      <Route path='' element={<>
        <p className="bg-red-500 text-4xl">
        Click on the Vite and React logos to learn more
      </p>
        </>} />
    </Routes>
  

    </>
  )
}

export default App
