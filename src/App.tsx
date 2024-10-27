import { SideBar } from "./Components/Sidebar/sideBar";
import { Home } from "./Components/Home/home";
import { RightSideBar } from "./Components/RightSideBar/rightSideBar";
import { useState } from "react";

function App() {
  const [showInfoCard, setShowInfoCard] = useState(false);
  
  const updateState = (state: boolean) => {
    setShowInfoCard(state);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        {!showInfoCard && <SideBar />}
        
        <Home actualizarEstado={updateState} />
        
        {!showInfoCard && <RightSideBar />}
      </div>
    </>
  );
}

export default App;
