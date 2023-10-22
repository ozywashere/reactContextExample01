import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<h1>Not Found 404</h1>} />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
