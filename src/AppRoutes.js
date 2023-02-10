//pages
import {Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import Error from './pages/Error';

//création des différentes routes 
function AppRoutes (){
    return(
<Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/logements/:id" element={<FicheLogement />} />
    <Route path="*" element={<Error />} />
</Routes>
);}

export default AppRoutes;