import AppRoutes from './AppRoutes';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/app.css";

//Insère les éléments communs a toutes les pages
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