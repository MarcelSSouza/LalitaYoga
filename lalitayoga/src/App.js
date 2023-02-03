import './App.css';
import React from 'react';
import MenuBar from './MenuBar';
import CarouselMain from './CarouselMain';
import  Footer  from './Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import OurFamily from './OurFamily';
import ContactPage from './ContactPage';
import FoodPage from './FoodPage';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
<Routes>

    <Route index element={<Main />} />
    <Route path="contact" element={<ContactPage/>} />
    <Route path="about" element={<OurFamily/>} />
    <Route path="food" element={<FoodPage/>} />
    <Route path="yoga" element={<FoodPage/>} />
    <Route path="house" element={<FoodPage/>} />
    <Route path="book" element={<FoodPage/>} />

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
