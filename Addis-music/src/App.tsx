/** @jsxImportSource @emotion/react */
import { Routes, Route } from "react-router-dom"
import HomeMusic from "./pages/homeMusic"
import Header from "./common/pages/header"
import HeaderSimu from "./common/pages/headerSimu"
import Trytry from "./pages/trytry"
import Toolkits from "./pages/toolkit"
// import store from '../src/store/indexx'
// import { Provider } from "react-redux"
import SagaSaga from "./pages/sagasaga"
import Footer from "./common/pages/footer"
import { useDispatch,useSelector } from "react-redux"
import { dropMenuFalse } from "./store/dropDownFilter"
import { RootState } from "./store/indexx";
import AboutUs from "./pages/aboutUs"


function App() {
  const dispatch =useDispatch()
  const isdropMenu = useSelector((state:RootState)=>state.isDropFilter.isDropMenu)

  return (
    <div onClick={()=>{
      if(isdropMenu){
        dispatch(dropMenuFalse())
      }
      }
      }>
      <Routes>
        <Route path="music" element={<>
          <Header />
          <HomeMusic />
          <Footer />
          </>} />
        <Route path="aboutUs" element={<>
          <Header />
          <AboutUs />
          <Footer />
          </>} />
        <Route path="try" element={<>
          <HeaderSimu />
          {/* <Header /> */}
          <Trytry /></>
        } />
        <Route path="tools" element={
          <Toolkits />
        } />
          <Route path="saga" element={
            <SagaSaga /> 
            } />
      </Routes>
    </div>
  )
}

export default App
