import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.components";
import Navigation from './routes/navigation/navigation.component';
import Authentication from "./routes/authentication/auth.component";


const Shop = () => {
  return (
    <h1>
      I am the SHOP component!
    </h1>
  )
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path='auth' element={ <Authentication/>} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;