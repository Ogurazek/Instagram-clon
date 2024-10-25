import { SideBar } from "./Components/Sidebar/sideBar"
import { Home } from "./Components/Home/home"
import { RightSideBar } from "./Components/RightSideBar/rightSideBar"
 
function App() {

  return (
      <>
      <div style={{display: 'flex'}}>
        <SideBar/>
        <Home/>
        <RightSideBar/>
      </div>
      </>
  )
}

export default App
