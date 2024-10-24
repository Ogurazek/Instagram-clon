import { SideBar } from "./Components/Sidebar/sideBar"
import { Home } from "./Components/Home/home"
 
function App() {

  return (
      <>
      <div style={{display: 'flex', margin: '0 32px'}}>
        <SideBar/>
        <Home/>
      </div>
      </>
  )
}

export default App
