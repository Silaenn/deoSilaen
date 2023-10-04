import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KelasPage from "./pages/KelasPage";
import SyaratKatenPage from "./pages/SyaratKatenPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqComponent from "./components/FaqComponent";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqComponent} />
        <Route path="/syaratketen" Component={SyaratKatenPage} />
        <Route path="/todolist" Component={ToDoList} />

      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
