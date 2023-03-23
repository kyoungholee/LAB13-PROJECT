import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '@components/Footer/Footer';
import SearchForm from './pages/SearchForm/SearchForm';
import MainPageSlide from '@pages/MainPageSlide/MainPageSlide';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchForm />} />
          <Route path="/main" exact element={<MainPageSlide />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
