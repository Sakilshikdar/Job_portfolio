import './App.css'
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import ProjectsOne from "./components/ProjectsFile/ProjectsOne";
import ProjectsThree from "./components/ProjectsFile/ProjectsThree";
import ProjectTwo from "./components/ProjectsFile/ProjectTwo";
import Home from "./pages/Home/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='font-serif' id="animation">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/projectOne" element={<ProjectsOne></ProjectsOne>}></Route>
          <Route path="/projectTwo" element={<ProjectTwo></ProjectTwo>}></Route>
          <Route path="/projectsThree" element={<ProjectsThree></ProjectsThree>}></Route>
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
