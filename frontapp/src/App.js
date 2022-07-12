import Header from "./components/Header/Header";
import styles from './App.module.css';
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductsPage/ProductPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCart";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapperContent}>
        <Navbar />
        <Routes>
          <Route path='/products' element={<ProductPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
          <Route path="*" element={<ProductPage />} />
        </Routes>
      </div>
    
    </div>
  );
}

export default App;
