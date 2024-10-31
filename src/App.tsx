import { SideBar } from "./Components/Sidebar/sideBar";
import { Home } from "./Components/Home/home";
import { RightSideBar } from "./Components/RightSideBar/rightSideBar";
import { useState } from "react";
import { SectionHome } from "./Components/SectionButton/sectionButton";


function App() {
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [showHome, setShowHome] = useState(false);
  
  const updateState = (state: boolean) => {
    setShowInfoCard(state);
  };
  const updateStateHome = (state: boolean) => {
    setShowHome(state);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        {!showInfoCard && <SideBar actualizarEstadoHome={updateStateHome} />}
        
        {showHome ? <SectionHome /> : <Home actualizarEstado={updateState}/>}
        
        {!showInfoCard && !showHome && <RightSideBar />}
      </div>
    </>
  );
}

export default App;
