import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss"
import Accueil from "./pages/accueil/Accueil";
import Annonces from "./pages/lesAnnonces/Annonces";
import Recherches from "./pages/recherches/Recherches";
import Messagerie from "./pages/messagerie/Messagerie"
import Profil from "./pages/profil/Profil";
import Favoris from "./pages/favoris/Favoris"
import Register from "./pages/login-register/Register";
import SeConnecter from "./pages/login-register/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import NouvelleAnnonce from "./pages/lesAnnonces/NouvelleAnnonce";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/les-annonces" element={<Annonces />} />
            <Route path="/resultats-recherches" element={<Recherches />} />
            <Route path="/login" element={<SeConnecter />} />
            <Route path="/register" element={<Register />} />
            <Route path="/messagerie" element={<Messagerie />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/favoris" element={<Favoris />} />
            <Route path="/addpost" element={<NouvelleAnnonce />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      </header>
    </div>
    
  );
}

export default App;
