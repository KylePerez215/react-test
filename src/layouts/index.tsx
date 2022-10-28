import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Layouts = () => {
  const [sideOpen, setSideOpen] = useState(true);
  const onUpdateSideOpen = () => {
    setSideOpen(!sideOpen)
  }

  return (
    <div className="wrapper">
      <Sidebar open={sideOpen} />
      <div className={sideOpen ? "main-panel" : "main-panel-open"}>
        <Header onUpdateSideOpen={onUpdateSideOpen} />
        <div className="content">
          Layouts
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layouts;