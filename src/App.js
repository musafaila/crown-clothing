import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.components";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

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
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;