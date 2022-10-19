import './App.css';
import './Css/cores/base.css';
import './Css/cores/variables.css';
import './Css/sections/mainMenu.css';
import './Css/sections/footer.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import ProductsView from './views/ProductsView';
import NotFoundView from './views/NotFoundView';
import FooterSection from './sections/FooterSection';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/products" element={<ProductsView />} />
        
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
