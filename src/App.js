import AppRoutes from './AppRoutes';
//composant pages
import Header from "./components/Header";
/* import Footer from "./components/Footer"; */
import "./styles/App.css";



//Créer la structure de la page
function App() {
  return (
    <>
      <Header />
      <main><AppRoutes /></main>
      {/* <Footer /> */}
    </>
  );
}

export default App;