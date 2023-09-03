import { Routes, Route } from "react-router-dom";

// IMPORTING ROUTES HERE
import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/auth.component";
import Shop from "./routes/shop/shop.components";
import CheckOut from "./components/checkout/checkout.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;