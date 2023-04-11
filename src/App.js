import "./App.css";
import SideNav from "./components/SideNav";
import MainSection from "./components/MainSection";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import ModalComp from "./components/Modal";
import ErrorPage from "./pages/ErrorPage";
import { useContext } from "react";
import { ContextApi } from "./components/Context";

function App() {
  const { isModalOpen } = useContext(ContextApi);

  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/music" element={<CreatePost />} />
        <Route path="/short" element={<CreatePost />} />
        <Route path="/meme" element={<CreatePost />} />
        <Route path="/fact" element={<CreatePost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {isModalOpen && <ModalComp />}
    </div>
  );
}

export default App;
