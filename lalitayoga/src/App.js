import './App.css';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import OurFamily from './OurFamily';
import ContactPage from './ContactPage';
import FoodPage from './FoodPage';
import HousePage from './HousePage';
import YogaPage from './YogaPage';
import BookPage from './BookPage';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
<Routes>

    <Route index element={<Main />} />
    <Route path="contact" element={<ContactPage/>} />
    <Route path="about" element={<OurFamily/>} />
    <Route path="food" element={<FoodPage/>} />
    <Route path="yoga" element={<YogaPage/>} />
    <Route path="house" element={<HousePage/>} />
    <Route path="book" element={<BookPage/>} />

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
