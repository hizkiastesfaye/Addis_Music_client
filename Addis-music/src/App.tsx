/** @jsxImportSource @emotion/react */
import { Routes, Route } from "react-router-dom"
import HomeMusic from "./pages/homeMusic"
import Trytry from "./pages/trytry"
import Toolkits from "./pages/toolkit"
import store from '../src/store/indexx'
import { Provider } from "react-redux"
import SagaSaga from "./pages/sagasaga"

function App() {
  return (
    <>
    <Routes>
      <Route path="music" element={<HomeMusic />} />
      <Route path="try" element={<Trytry />} />
      <Route path="tools" element={
        <Provider store={store}>
        <Toolkits />
        </Provider>} />
        <Route path="saga" element={
          <Provider store={store}>
          <SagaSaga /> 
          </Provider>
          } />
    </Routes>
    </>
  )
}

export default App
