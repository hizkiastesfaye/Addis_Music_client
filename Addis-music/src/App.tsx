/** @jsxImportSource @emotion/react */
import { Routes, Route } from "react-router-dom"
import HomeMusic from "./pages/homeMusic"
import Header from "./common/pages/header"
import Footer from "./common/pages/footer"
import { useDispatch,useSelector } from "react-redux"
import { dropMenuFalse } from "./store/dropDownFilter"
import { RootState } from "./store/indexx";
import AboutUs from "./pages/aboutUs"
import SearchList from "./pages/searchList"


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
          <Route path="search" element={<>
          <Header />
          <SearchList />
          <Footer />
          </>} />
        <Route path="aboutUs" element={<>
          <Header />
          <AboutUs />
          <Footer />
          </>} />
      </Routes>
    </div>
  )
}

export default App
