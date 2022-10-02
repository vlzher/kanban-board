import "./styles/app.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListZone from "./components/ListZone";
import {useState} from "react";
import CustomModal from "./components/CustomModal";
function App() {
    const [modalState, setModalState] = useState(false)
  return (
    <div className="app">
        <CustomModal modalState={modalState} setModalState={setModalState}/>
        <Header buttonFunc={setModalState}/>
        <ListZone/>
        <Footer/>
    </div>
  );
}

export default App;
