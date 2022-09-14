import Nav from "./components/nav/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss"
import Accueil from "./pages/accueil/Accueil";
import Annonces from "./pages/lesAnnonces/Annonces";
import Recherches from "./pages/recherches/Recherches";
import Login from "./pages/login-register/Login"
import Messagerie from "./pages/messagerie/Messagerie"
import Profil from "./pages/profil/Profil";
import Favoris from "./pages/favoris/Favoris"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/les-annonces" element={<Annonces />} />
          <Route path="/resultats-recherches" element={<Recherches />} />
          <Route path="/login" element={<Login />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/favoris" element={<Favoris />} />

        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
