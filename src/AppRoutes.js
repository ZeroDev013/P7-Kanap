/* import ReactDOM from 'react-dom/client'; */
import {Routes ,Route} from 'react-router-dom';
import Body from './pages/Body';
/* import Fiche from './pages/Fiche';
import Error from './pages/Error';
import Apropos from './pages/Apropos'; */

function AppRoutes (){
    return(
<Routes>
    <Route path="/" element={<Body />} />
    {/* <Route path="/" element={<Fiche />} />
    <Route path="/" element={<Error />} />
    <Route path="/" element={<Apropos />} /> */}
</Routes>
);}

export default AppRoutes;