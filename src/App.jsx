import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// import Header from './components/Header/Header';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainPageSlide from '@pages/MainPageSlide/MainPageSlide';

import QuickVodSlide from '@pages/QuickVodSlide/QuickVodSlide';
import DetailPages from './pages/DetailPages/DetailPages';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" exact element={<MainPageSlide />} />
          <Route path="/detailPage01/:id" element={<DetailPages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
