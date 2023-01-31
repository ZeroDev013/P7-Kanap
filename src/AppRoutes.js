//pages
import {Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Fiche from './pages/Fiche';
import Error from './pages/Error';
import About from './pages/About';

//création des différentes routes 
function AppRoutes (){
    return(
<Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/:id" element={<Fiche />} />
    <Route path="/about" element={<About />} />
    {/* <Route path="*" element={<Error />} /> */}
</Routes>
);}

export default AppRoutes;