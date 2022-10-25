import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import ProductsView from './views/ProductsView';
import ProductsDetailsView from './views/ProductsDetailsView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import FooterSection from './sections/FooterSection';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductsDetailsView />} />
        
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
