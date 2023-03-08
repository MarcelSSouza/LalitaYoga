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
import EventsPage from "./EventsPage"
import BookPage from './BookPage';
import ImmersionPage from "./ImmersionPage"
import MeditationPage from "./MeditationPage"
import RetreatPage from "./RetreatPage"
import WelcomeKit from "./WelcomeKit"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<OurFamily />} />
          <Route path="food" element={<FoodPage />} />
          <Route path="yoga" element={<YogaPage />} />
          <Route path="house" element={<HousePage />} />
          <Route path="book" element={<BookPage />} />
          <Route path="yoga/immersiontraining" element={<ImmersionPage />} />
          <Route path="yoga/meditationcourse" element={<MeditationPage />} />
          <Route path="yoga/traditionalretreat" element={<RetreatPage />} />
          <Route path="next" element={<EventsPage />} />
          <Route path="welcomekit" element={<WelcomeKit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
