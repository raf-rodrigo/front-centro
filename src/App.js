import Footer from "./components/Footer";
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from "./components/Content";
import Header from "./components/Header";
import backgroundImage from './img/fundo_site.png';
import './App.css';
import Tratamento from "./pages/Tratamento";
import Atendimento from "./pages/Atendimento";
import Biografia from "./pages/Biografia";

function App() {
  return (
      <div className="pt-2" id="fundo_site">
          <Router>
              <Header  />
                  <Routes>
                      <Route exact path='/' element={<Home />} />
                  </Routes>
                  <Routes>
                      <Route path='/tratamentos' element={<Tratamento />} />
                  </Routes>
                  <Routes>
                      <Route path='/atendimentos' element={<Atendimento />} />
                  </Routes>
                  <Routes>
                      <Route path='/biografias' element={<Biografia />} />
                  </Routes>

              <Footer />
          </Router>
      </div>
  );
}

export default App;
