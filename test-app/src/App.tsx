import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FavoritesPage } from './pages/FavoritesPage';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { ViewHistoryProvider } from './contexts/ViewHistoryContext';
import { ViewHistoryPage } from './pages/ViewHistoryPage';

function App() {
  return (
    <ViewHistoryProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/histories" element={<ViewHistoryPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </FavoritesProvider>
    </ViewHistoryProvider>
  );
}

export default App;
