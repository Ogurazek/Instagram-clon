import { SideBar } from "./Components/Sidebar/sideBar";
import { Home } from "./Components/Home/home";
import { RightSideBar } from "./Components/RightSideBar/rightSideBar";
import { useState } from "react";
import { SectionHome } from "./Components/SectionButton/sectionButton";

function App() {
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const updateState = (state: boolean) => {
    setShowInfoCard(state);
  };
  const updateStateHome = (state: boolean) => {
    setShowHome(state);
  };
  const updateShowModal = (state: boolean) => {
    setShowModal(state);
  };

  return (
    <>
      <div style={{ width: 'vw', height: 'vh' }}>
        <div style={{ display: 'flex', overflow: 'hidden', justifyContent: 'space-between', }}>


          {!showInfoCard && <SideBar actualizarEstadoHome={updateStateHome} actualizarEstadoModal={updateShowModal} />}

          {showHome ? <SectionHome /> :
            <Home
              actualizarEstado={updateState}
              EstadoModal={showModal}
              actualizarEstadoModal={updateShowModal}
            />}

          {!showInfoCard && !showHome && <RightSideBar />}
        </div>
      </div>
    </>
  );
}

export default App;
