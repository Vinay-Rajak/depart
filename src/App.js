import "./styles.css";
import Head from "./component/Head/Head.js";
import Nav from "./component/nav/Nav.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Department from "./pages/Department/Department.js";
import Student from "./pages/Student/Student.js";
import Faculty from "./pages/Faculty/Faculty.js";
import Placement from "./pages/Placement/Placement.js";
import Contact from "./pages/Contact/Contact.js";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Department" element={<Department />} />
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/faculty" element={<Faculty />} />
          <Route exact path="/placement" element={<Placement />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
