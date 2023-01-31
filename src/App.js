import AppRoutes from './AppRoutes';
//composant pages
import Header from "./components/Header";
import Footer from "./components/Footer";

//styles
import "./styles/app.css";

//Créer la structure de la page en important les routes de AppRoutes
function App() {
  return (
    <>
      <Header />
      <main><AppRoutes /></main>
      <Footer />
    </>
  );
}

export default App;