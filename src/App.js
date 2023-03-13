import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import { ModalProvider } from "./contexts/ModalContext";
import AddModal from "./modal/AddModal";
import DeleteModal from "./modal/DeleteModal";
import AddList from "./pages/AddList";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import MyCompany from "./pages/MyCompany";
import MyEmploye from "./pages/MyEmploye";
import RecentUpload from "./pages/RecentUpload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route index path="mycompany" element={<MyCompany />} />
              <Route path="addlist" element={<AddList />} />
              <Route path="myempolyee" element={<MyEmploye />} />
              <Route path="recent-upload" element={<RecentUpload />} />
            </Route>
            <Route path="/login" element={<LogIn />} />
          </Routes>
          <DeleteModal />
        </ModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
