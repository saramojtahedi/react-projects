import './App.css';
import MainRoutes from './MainRoutes';
import ProductsProvider from './pages/products/ProductsProvider';

function App() {
  return (
    <ProductsProvider>
      <MainRoutes />
    </ProductsProvider>
  );
}

export default App;
