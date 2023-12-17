import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";
import { Navbar } from "./components/navbar/Navbar";

import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { Users } from "./pages/users/Users";
import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
